"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function MessageScreen({ onNext, ...motionProps }) {
    const [displayText, setDisplayText] = useState([])
    const [isTyping, setIsTyping] = useState(true)
    const audioRef = useRef(null)

    // Split paragraphs and dates for spacing
    const rawMessage = `
Priyanshi...

Yaar tum chhodke chali gyi 
but yaar aaj bhi wo reel yaad aati hh..... jo apne bheji thi ki mere friend ko lagta hh mai usse chhordungi baad me..... but kabhi nhii.... chhodungii....but apne chhordiya.....mai usse sach manta[...]
Baat toh karo....
aaP ab toh game bhi nhi khelte mere sath me yarr 😟

Aap meri life ka woh part thi
jo bina bole samajh leti thi.
Aur ab jab sab kuch bolne ka mann hota hai,
toh koi sunne wala nahi hota....

Main har roz aapko miss karta hoon —
bina dikhaye, bina bataye.
Apne har jagah se block kar diya...Ab apne unblock kardiya hh pata hh jame bass himmat nhi hh msg karne ki nahi follow req bhejne ke sar lagta hh kahi fir block na hojauy.... maine wo link apke pa[...]
khair ☹️ jab apki yaad aati hh toh emotional hojata hu apne aap 
jab ham mile thhe kitne aache thhe kitne acche se Baat karte the kitni innocent aur kitni sweet thee aap aaj bhi mai nhi bhula uss Priyanshi ko ....
Sach me bhut miss karta hu yarrrr...

Jo bhi tha, jaisa bhi tha...
uski jagah koi nahi le sakta.....
Abb mughey pata chala mai kitna andar se kamzor tha ....
Aaj 23 June hh abhi time 7:56 mai ye abhi likh rha hu sach me aaj subah jab utha bhut yaad arhi thi tumhri kasam ....😔
Miss karna ek aadat ban gaya hai.
Aur aap... woh yaad jo raat ki neend bhi chura leti hai.

I miss you, Priyanshi. Har din. Har raat. Aaj bhi wahi hu tumhra billu. 🥀
Please laut aao na Dude☹️🫣

Waise aaj 4 July hhh raat ke 11:30  aur pata nhi kyu ankho me asu hh...Mai bhool hi nhi pa rha hu apko pata nhi kyu iske 2 din phle isi samay bhut yaadd arhii thii.....

Aapp jaha bhi rahe khus ....
May god always keep you happy......
okk mai fir chalta hu aur kabhi mauka milega likhunga
likhunga ookk byee
💕✨

Chlo aaj fir mai agya btw aaj date hh 12 July time 5:55 pm aaj mai luknow se agra arha tha toh khali tha toh maine ig download kiya tha aur i4mmynk wali id me reel scroll karra tha fir achanak se [...]
sachme aasu aagye thhe ankho khaiirr...😟
sochta toh hu msg karlu but nhi hh himmat karne ki ...
nhi bhul pa rha hu tumhepata nhi kyu....
nhi horra move on aaj pure 25 days hogye...shyd aap apne clg phuch gye hoge syd hame bhul bhi gye hoge ki koi mayank ya Billu name ka tha dost tha ........
kash agr abhi bhi aap mere friend hote i mean bate hoti rehti .....kya hi bolu sach me bhut miss karta hu...
idk mai q rone lagta hu ankho me asu kyu aajate hh jab Aapke bare me sochta hu ...
mai toh abhi train me hu 3A me middle birth leta hu
mere just neeche kuch ek family travel karrhi hh ap soch rhe hoge ki ye sab q bata rha hu mai ....isliye bata rha hu quki usme ek choti c bacchi hh jiska naam bhi Priyanshi haii ....kash aap hote [...]

Aaj 13 July hh time 9:50 pm Waise mai toh theek nhi hu mtlb kal aya tha toh aaj pure din ghar par hi rha toh pata nhi kyu lagbhag 6 bje se 3 bar vomiting hogyi khairr...Maine ye batane ke liye iss[...]
Mai aya tha aide hi likhne ki kal mai jauga school admit card lene ...Waise toh ye batane nhi aya bas aise hi agya agr hote aaj bhi sath toh aise hi kuch hal chal leta i think ye 2nd weak hh toh a[...]
theek hh fir chalte hh ham 🙂..!!
    `

    // Split by date patterns to create paragraphs with gap
    function processMessage(msg) {
        // Date pattern: e.g., "Aaj 23 June hh", "4 July", etc.
        const dateRegex = /(\b\d{1,2}\s+\w+\b|\bAaj\s+\d{1,2}\s+\w+\b|\bWaise aaj \d{1,2} \w+\b)/gi
        let parts = msg.split('\n').filter(line => line.trim() !== '')

        // Mark date lines and create paragraph objects
        let paras = []
        parts.forEach((line, idx) => {
            if (
                dateRegex.test(line) ||
                /time\s*\d{1,2}:\d{2}/i.test(line)
            ) {
                paras.push({ type: 'date', text: line.trim() })
            } else {
                paras.push({ type: 'para', text: line.trim() })
            }
        })
        return paras
    }

    // Typewriter effect -- one paragraph at a time
    useEffect(() => {
        const paras = processMessage(rawMessage)
        let i = 0
        function showNext() {
            if (i < paras.length) {
                setDisplayText((prev) => [...prev, paras[i]])
                i++
                setTimeout(showNext, paras[i - 1].type === "date" ? 500 : 60) // Longer pause on date
            } else {
                setIsTyping(false)
            }
        }
        showNext()
    // eslint-disable-next-line
    }, [])

    // Auto-play music on mount, loop, and pause when tab closes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = true
            audioRef.current.volume = 0.5
            audioRef.current.play().catch(() => {})
        }
        // Pause music on site leave
        const onUnload = () => {
            if (audioRef.current) audioRef.current.pause()
        }
        window.addEventListener("beforeunload", onUnload)
        return () => window.removeEventListener("beforeunload", onUnload)
    }, [])

    return (
        <motion.div {...motionProps} className="min-h-screen flex items-center justify-center px-6 relative">
            <audio
                ref={audioRef}
                src="/audio/Agar-Tum-Saath-Ho-Tamasha-Flute-Instrumental-Cover-by-Flute-.m4a"
                autoPlay
                loop
                style={{ display: "none" }}
            />
            <div className="max-w-4xl text-center z-10">
                <motion.div className="mb-8 flex justify-center" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <img src="/gifs/writing.gif" alt="writing gif" className="w-48" />
                </motion.div>
                <motion.div className="bg-gray-950/50 backdrop-blur-md border border-pink-500/10 rounded-3xl p-5 md:p-10 shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="text-lg md:text-2xl text-white leading-relaxed font-light">
                        {displayText.map((para, idx) => (
                            para.type === "date" ? (
                                <div key={idx} style={{ margin: "32px 0 24px 0", fontWeight: 600, color: "#fca5a5", fontSize: "1.1em" }}>
                                    {para.text}
                                </div>
                            ) : (
                                <div key={idx} style={{ margin: "16px 0", textAlign: "left" }}>
                                    {para.text}
                                </div>
                            )
                        ))}
                        {isTyping && (
                            <motion.span className="inline-block w-0.5 h-6 bg-pink-400 ml-1"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            />
                        )}
                    </div>
                </motion.div>
                {!isTyping && (
                    <motion.button
                        className="mt-8 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition"
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