"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

export default function MessageScreen({ onNext, ...motionProps }) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

        const message = `
Priyanshi...

Yaar tum chhodke chali gyi 
but yaar aaj bhi wo reel yaad aati hh..... jo apne bheji thi ki mere friend ko lagta hh mai usse chhodungi..... but kabhi nhii chhodungii....but apne chhoodiya.....mai usse sach manta thaa isiliye nischint rehta tha yarr please fir ajao na ...
Baat toh karo....
Yaar ab toh game bhi nhi khelte mere sath me yarr 😟


Aap door ho... par dil nahi maanta.
Waqt aur distance toh sirf numbers hain —
aap toh har khayal ke beech ho,
har silence ke baad ho.

Aap meri life ka woh part thi
jo bina bole samajh leti thi.
Aur ab jab sab kuch bolne ka mann hota hai,
toh koi sunne wala nahi hota....

Main har roz aapko miss karta hoon —
bina dikhaye, bina bataye.
Apne har jagah se block kar diya maine wo link apke pass bheji thi shyd aap kabhi galti se click kare toh ye msg ap tak phuch jye.....
khair ☹️ jab apki yaad aati hh toh emotional hojata hu apne aap 
jab ham mile thhe kitne aache thhe kitne acche se Baat karte the kitni innocent aur kitni sweet thee aap aaj bhi mai nhi bhula uss Priyanshi ko ....
Sach me bhut miss karta hu yarrrr...


Jo bhi tha, jaisa bhi tha...
uski jagah koi nahi le sakta.....
Abb mughey pata chala mai kitna andar se kamzor tha ....

Miss karna ek aadat ban gaya hai.
Aur aap... woh yaad jo raat ki neend bhi chura leti hai.

I miss you, Priyanshi. Har din. Har raat. Aaj bhi wahi hu tumhra billu. 🥀
Please laut aao na Dude☹️🫣
💕✨
`

    useEffect(() => {
        if (currentIndex < message.length) {

    
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev + message[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, 30)
            return () => clearTimeout(timer)
        } else {
            setIsTyping(false)
        }
    }, [currentIndex, message])

    return (
        <motion.div {...motionProps} className="min-h-screen flex items-center justify-center px-6 relative">

            <div className="max-w-4xl text-center z-10">
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className=""><img src="/gifs/writing.gif" alt="writing gif" className="w-48" /></div>
                </motion.div>

                <motion.div
                    className="bg-gray-950/50 backdrop-blur-md border border-pink-500/10 rounded-3xl p-5 md:p-10 shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
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

                {!isTyping && (
                    <motion.button
                        className="mt-8 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all"
                        onClick={onNext}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Our Memories📸
                    </motion.button>
                )}
            </div>
        </motion.div>
    )
}
