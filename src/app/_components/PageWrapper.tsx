"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

export const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {children}
  </motion.div>
)
