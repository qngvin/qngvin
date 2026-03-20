'use client';

import clsx from 'clsx';
import { GoDotFill } from 'react-icons/go';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
  exact?: boolean;
  sizeDot?: number;
};

/**
 * ActiveLink — Client Component.
 *
 * Uses standard `usePathname` and `Link` from Next.js.
 */
export default function ActiveLink({
  href,
  children,
  activeClassName = 'text-black dark:text-white',
  className,
  sizeDot = 14,
  exact = false,
}: ActiveLinkProps) {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(className, isActive && activeClassName)}
    >
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="dot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center justify-center h-full"
          >
            <GoDotFill className={activeClassName} size={sizeDot} />
          </motion.div>
        ) : (
          <motion.div
            key="children"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
