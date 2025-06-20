"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

export default function FinalScreen({ ...motionProps }) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    const finalMessage =
        "Even itne miles door hokar bhi...
main bas aapke baare me hi sochta hoon.
Har second jab aap se baat nahi hoti —
lagta hai kuch adhoora reh gaya.

Aapki smile, woh random laugh,
voice notes... ya woh funny Free Fire wale moments —
sab kuch yaad aata hai.

Humne sirf chat ki thi,
lekin connection real tha.
Game ke beech wale wo stupid jokes,
aur aapka “arre revive karo bhai” kehna —
ab bhi kaan me ghoomta hai.

Aap meri shanti thi
is noisy world me —
ek woh name jise dekh ke din theek lagta tha.

Distance matter karta hai,
but feelings kabhi signal drop nahi karti.
Aap mere har thought me ho...
aur dil me hamesha rehoge.

Mujhe pata nahi kab fir baat hogi,
kab game me team banegi
ya kab ek “hi” wapas aayega...
but tab tak, sirf ek hi baat kehni hai —

I miss you... more than my own words can ever explain. 🌙💬🎮💕"

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < finalMessage.length) {
                setDisplayText((prev) => prev + finalMessage[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            } else {
                setIsTyping(false)
            }
        }, 30)
        return () => clearTimeout(timer)
    }, [currentIndex, finalMessage])

    return (
        <motion.div {...motionProps} className="min-h-screen flex items-center justify-center text-center px-6 relative">

            <div className="max-w-4xl z-10">
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div><img src="/gifs/us.gif" alt="us gif" className="w-48" /></div>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Forever Yours
                </motion.h2>

                <motion.div
                    className="bg-gray-950/50 backdrop-blur-md border border-pink-500/10 rounded-3xl p-5 md:p-10 shadow-2xl mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-lg md:text-2xl text-white leading-relaxed font-light">
                        {displayText}
                        {isTyping && (
                            <motion.span
                                className="inline-block w-0.5 h-6 bg-pink-400 ml-1"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            />
                        )}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}
