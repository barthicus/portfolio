'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

/**
 * This component is a wrapper that applies a fade-in and fade-out animation to its children using the Framer Motion library.
 */
export const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {children}
  </motion.div>
)
