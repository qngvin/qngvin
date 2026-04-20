import { DISABLE_TILT_KEY, DISABLE_TILT_TIMEOUT } from '../shared/constants/common';
// Khai báo mở rộng window để tránh lỗi TS khi dùng __lastStrongTiltValue
declare global {
  interface Window {
    __lastStrongTiltValue?: number;
  }
}
import { useRef, useEffect } from 'react';
import { useMotionValue, animate } from 'framer-motion';

// Configurable constants
const MAX_ROTATION = 7; // degrees
const VELOCITY_THRESHOLD = 600; // px/sec
const MIN_TRIGGER_VELOCITY = 330; // px/sec
const RETURN_EASING = { type: 'spring', stiffness: 120, damping: 18 };
const SPAM_WINDOW = 250; // ms
const SPAM_DIRECTION_CHANGES = 3;
const RETURN_DELAY = 160; // ms

export function usePageTiltEffect() {
  const lastX = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);
  const velocity = useRef(0);
  const frame = useRef<number | null>(null);
  const tilt = useMotionValue(0);
  const directionHistory = useRef<{ dir: number; time: number }[]>([]);
  const lastDir = useRef<number | null>(null);
  const returnTimeout = useRef<NodeJS.Timeout | null>(null);
  // Thêm biến để theo dõi thời gian spam
  // Theo dõi các lần nghiêng mạnh và đổi hướng
  const strongDirectionChangeTimes = useRef<number[]>([]);
  const tiltAlerted = useRef(false);

  useEffect(() => {
    let running = true;
    function onMouseMove(e: MouseEvent) {
      const now = performance.now();
      if (lastX.current !== null && lastTime.current !== null) {
        const dx = e.clientX - lastX.current;
        const dt = now - lastTime.current;
        if (dt > 0) {
          const v = (dx / dt) * 1000;
          velocity.current = v;
          const dir = dx > 0 ? 1 : dx < 0 ? -1 : 0;
          if (dir !== 0 && lastDir.current !== null && dir !== lastDir.current) {
            directionHistory.current.push({ dir, time: now });
          }
          lastDir.current = dir;
          directionHistory.current = directionHistory.current.filter(
            (item) => now - item.time < SPAM_WINDOW,
          );
        }
      }
      lastX.current = e.clientX;
      lastTime.current = now;
    }

    function animateFrame() {
      if (!running) return;
      const v = velocity.current;
      let target = 0;

      // Theo dõi các lần nghiêng mạnh và đổi hướng liên tục
      const now = performance.now();
      const tiltValue = tilt.get();
      // Đổi hướng mạnh: tilt vượt ngưỡng và đổi dấu so với lần trước
      if (Math.abs(tiltValue) > 3.5) {
        const prev =
          strongDirectionChangeTimes.current.length > 0
            ? strongDirectionChangeTimes.current[strongDirectionChangeTimes.current.length - 1]
            : null;
        // Đổi hướng mạnh khi tilt vượt ngưỡng và đổi dấu so với lần trước
        if (prev === null || tiltValue * (window.__lastStrongTiltValue ?? 0) < 0) {
          strongDirectionChangeTimes.current.push(now);
          window.__lastStrongTiltValue = tiltValue;
        }
      }
      // Giữ lại các lần trong 3 giây gần nhất
      strongDirectionChangeTimes.current = strongDirectionChangeTimes.current.filter(
        (t) => now - t < 3000,
      );
      if (!tiltAlerted.current && strongDirectionChangeTimes.current.length >= 5) {
        // Đặt biến sessionStorage để tắt hiệu ứng lắc trong DISABLE_TILT_TIMEOUT ms
        sessionStorage.setItem(DISABLE_TILT_KEY, 'true');
        setTimeout(() => {
          sessionStorage.setItem(DISABLE_TILT_KEY, 'false');
        }, DISABLE_TILT_TIMEOUT);
        tiltAlerted.current = true;
        strongDirectionChangeTimes.current = [];
      }
      if (strongDirectionChangeTimes.current.length === 0) {
        tiltAlerted.current = false;
        window.__lastStrongTiltValue = 0;
      }

      // Nếu đang bị disable hiệu ứng thì luôn trả tilt về 0
      const disableTilt = sessionStorage.getItem(DISABLE_TILT_KEY) === 'true';
      if (disableTilt) {
        if (tilt.get() !== 0) {
          tilt.stop();
          animate(tilt.get(), 0, {
            type: 'spring',
            stiffness: RETURN_EASING.stiffness,
            damping: RETURN_EASING.damping,
            onUpdate: (v) => tilt.set(v),
          });
        }
      } else {
        const isSpam =
          Math.abs(v) > MIN_TRIGGER_VELOCITY &&
          directionHistory.current.length >= SPAM_DIRECTION_CHANGES;

        if (isSpam) {
          target = Math.max(
            -MAX_ROTATION,
            Math.min(MAX_ROTATION, (v / VELOCITY_THRESHOLD) * MAX_ROTATION),
          );
          if (returnTimeout.current) {
            clearTimeout(returnTimeout.current);
            returnTimeout.current = null;
          }
          tilt.stop();
          animate(tilt.get(), target, {
            type: 'tween',
            ease: 'easeOut',
            duration: 0.18,
            onUpdate: (v) => tilt.set(v),
          });
        } else {
          if (!returnTimeout.current && tilt.get() !== 0) {
            returnTimeout.current = setTimeout(() => {
              tilt.stop();
              animate(tilt.get(), 0, {
                type: 'spring',
                stiffness: RETURN_EASING.stiffness,
                damping: RETURN_EASING.damping,
                onUpdate: (v) => tilt.set(v),
              });
              returnTimeout.current = null;
            }, RETURN_DELAY);
          }
        }
      }
      frame.current = requestAnimationFrame(animateFrame);
    }
    window.addEventListener('mousemove', onMouseMove);
    frame.current = requestAnimationFrame(animateFrame);
    return () => {
      running = false;
      window.removeEventListener('mousemove', onMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [tilt]);

  useEffect(() => {
    function onMouseLeave() {
      velocity.current = 0;
      if (returnTimeout.current) {
        clearTimeout(returnTimeout.current);
        returnTimeout.current = null;
      }
      tilt.stop();
      animate(tilt.get(), 0, {
        type: 'spring',
        stiffness: RETURN_EASING.stiffness,
        damping: RETURN_EASING.damping,
        onUpdate: (v) => tilt.set(v),
      });
    }
    window.addEventListener('mouseleave', onMouseLeave);
    return () => window.removeEventListener('mouseleave', onMouseLeave);
  }, [tilt]);

  return tilt;
}
