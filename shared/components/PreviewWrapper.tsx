"use client"
import { useState, useEffect } from "react";
import Preview from "@/shared/components/Preview";
import PageTransition from "./PageTransition";
import { motion, AnimatePresence } from "framer-motion";

export default function PreviewWrapper({ children }: { children: React.ReactNode }) {
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreview(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence  mode="wait">
      {showPreview ? (
        <Preview key="preview" />
      ) : (
        <motion.div
          key="main"
          className="fixed inset-0 z-40 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <PageTransition>{children}</PageTransition>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
