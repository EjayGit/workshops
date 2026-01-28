"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function ExitAnimation() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div style={container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            <motion.button
                style={button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "40px"
}

const box = {
  width: "120px",
  height: "120px",
  background: "hotpink",
  borderRadius: "12px"
}

const button = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer"
}

