'use client';
import { useEffect, useState, useRef } from 'react';
import { DISABLE_TILT_KEY } from '../shared/constants/common';

// Hiệu ứng split: clone children, animate 2 nửa tách ra khi bị spam lắc
export default function CrackOverlay({ children }: { children?: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [split, setSplit] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const splittingRef = useRef(false);

  useEffect(() => {
    function check() {
      if (sessionStorage.getItem(DISABLE_TILT_KEY) === 'true' && !splittingRef.current) {
        splittingRef.current = true;
        setShow(true);
        sessionStorage.setItem(DISABLE_TILT_KEY, 'true');
        setTimeout(() => setSplit(true), 50);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setSplit(false);
          setTimeout(() => {
            setShow(false);
            sessionStorage.setItem(DISABLE_TILT_KEY, 'false');
            splittingRef.current = false;
          }, 400);
        }, 3000);
      }
    }
    const interval = setInterval(check, 200);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      splittingRef.current = false;
    };
  }, []);

  console.log('show', show);
  return (
    <>
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {/* Nền mờ khi split */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: show && split ? 9999 : -1,
            background: show && split ? 'rgba(0,0,0,0.45)' : 'transparent',
            opacity: show && split ? 1 : 0,
            pointerEvents: 'none',
            transition: 'opacity 0.4s',
          }}
        />
        {children}
        {show && (
          <>
            {/* Nửa trái: chỉ hiển thị phần trái của children */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '50vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 10000,
                overflow: 'hidden',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                transform: split ? 'translateX(-80px) rotate(-7deg)' : 'none',
                transition: 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
                boxShadow: split ? '-16px 0 48px 0 #0008' : 'none',
                background: 'transparent',
              }}
            >
              <div
                style={{
                  width: '100vw',
                  height: '100vh',
                  transform: 'translateX(0)',
                  pointerEvents: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                }}
              >
                {children}
              </div>
            </div>
            {/* Nửa phải: chỉ hiển thị phần phải của children */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: '50vw',
                width: '50vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 10000,
                overflow: 'hidden',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                transform: split ? 'translateX(80px) rotate(7deg)' : 'none',
                transition: 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
                boxShadow: split ? '16px 0 48px 0 #0008' : 'none',
                background: 'transparent',
              }}
            >
              <div
                style={{
                  width: '100vw',
                  height: '100vh',
                  transform: 'translateX(-50vw)',
                  pointerEvents: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                }}
              >
                {children}
              </div>
            </div>
            {/* Vùng đen ở giữa */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 'calc(50vw - 32px)',
                width: '64px',
                height: '100vh',
                background: '#111',
                zIndex: 10001,
                pointerEvents: 'none',
              }}
            />
            {/* 2 đường rạn nứt nối về 1 điểm */}
            <svg
              width="100vw"
              height="100vh"
              viewBox="0 0 1920 1080"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 10002,
              }}
            >
              <polyline
                points="960,0 940,300 970,540 960,700 970,900 960,1080"
                stroke="#fff"
                strokeWidth="6"
                fill="none"
                filter="drop-shadow(0 0 8px #000)"
              />
              <polyline
                points="960,0 980,300 950,540 960,700 950,900 960,1080"
                stroke="#fff"
                strokeWidth="6"
                fill="none"
                filter="drop-shadow(0 0 8px #000)"
              />
            </svg>
          </>
        )}
      </div>
    </>
  );
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* 2 nửa page split */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50vw',
          height: '100vh',
          background: 'inherit',
          transform: split ? 'translateX(-40px) rotate(-2deg)' : 'translateX(0)',
          transition: 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)',
          boxShadow: split ? '-8px 0 24px 0 #0004' : 'none',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '200vw',
            height: '100vh',
            position: 'relative',
            left: '-50vw',
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>{children}</div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50vw',
          height: '100vh',
          background: 'inherit',
          transform: split ? 'translateX(40px) rotate(2deg)' : 'translateX(0)',
          transition: 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)',
          boxShadow: split ? '8px 0 24px 0 #0004' : 'none',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '200vw',
            height: '100vh',
            position: 'relative',
            left: '-50vw',
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>{children}</div>
        </div>
      </div>
      {/* Đường rạn nứt ở giữa */}
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 1920 1080"
        style={{ position: 'absolute', width: '100vw', height: '100vh', pointerEvents: 'none' }}
      >
        <polyline
          points="960,0 970,200 950,400 970,600 950,800 960,1080"
          stroke="#fff"
          strokeWidth="6"
          fill="none"
          filter="drop-shadow(0 0 8px #000)"
        />
      </svg>
    </div>
  );
}
