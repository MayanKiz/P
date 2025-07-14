"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function MessageScreen({ onNext, ...motionProps }) {
    const [displayText, setDisplayText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const audioRef = useRef(null)

    // Multi-line message, paragraphs split with \n\n for line breaks
    const message = `
   PPriyanshi...

Yaar tum chhodke chali gyi 
but yaar aaj bhi wo reel yaad aati hh..... jo apne bheji thi ki mere friend ko lagta hh mai usse chhordungi baad me..... but kabhi nhii.... chhodungii....but apne chhordiya.....mai usse sach manta thaa isiliye nischint rehta tha Aap please fir ajao na ...
Baat toh karo....
aaP ab toh game bhi nhi khelte mere sath me yarr 😟

Aap meri life ka woh part thi
jo bina bole samajh leti thi.
Aur ab jab sab kuch bolne ka mann hota hai,
toh koi sunne wala nahi hota....

Main har roz aapko miss karta hoon —
bina dikhaye, bina bataye.
Apne har jagah se block kar diya...Ab apne unblock kardiya hh pata hh jame bass himmat nhi hh msg karne ki nahi follow req bhejne ke sar lagta hh kahi fir block na hojauy.... maine wo link apke pass bheji thi shyd aap kabhi galti se click kare toh ye msg ap tak phuch jye.....
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
Chlo aaj fir mai agya btw aaj date hh 12 July time 5:55 pm aaj mai luknow se agra arha tha toh khali tha toh maine ig download kiya tha aur i4mmynk wali id me reel scroll karra tha fir achanak se wahi sari reels ane fir mai emotional hogya fir apki yaad ane lagi ....
sachme aasu aagye thhe ankho khaiirr...😟
sochta toh hu msg karlu but nhi hh himmat karne ki ...
nhi bhul pa rha hu tumhepata nhi kyu....
nhi horra move on aaj pure 25 days hogye...shyd aap apne clg phuch gye hoge syd hame bhul bhi gye hoge ki koi mayank ya Billu name ka tha dost tha ........
kash agr abhi bhi aap mere friend hote i mean bate hoti rehti .....kya hi bolu sach me bhut miss karta hu...
idk mai q rone lagta hu ankho me asu kyu aajate hh jab Aapke bare me sochta hu ....
mai toh abhi train me hu 3A me middle birth leta hu
mere just neeche kuch ek family travel karrhi hh ap soch rhe hoge ki ye sab q bata rha hu mai ....isliye bata rha hu quki usme ek choti c bacchi hh jiska naam bhi Priyanshi haii ....kash aap hote toh apko msg karta aur sabse phle yhi batata ya aur kuch bate karta lekin 🥺🙂
Aaj 13 July hh time 9:50 pm Waise mai toh theek nhi hu mtlb kal aya tha toh aaj pure din ghar par hi rha toh pata nhi kyu lagbhag 6 bje se 3 bar vomiting hogyi khairr...Maine ye batane ke liye isse nhi khola....
Mai aya tha aide hi likhne ki kal mai jauga school admit card lene ...Waise toh ye batane nhi aya bas aise hi agya agr hote aaj bhi sath toh aise hi kuch hal chal leta i think ye 2nd weak hh toh aap apne clg phuch gye hoge...umeed yahi hh ki aap enjoy karrhe hoge...aapka din accha gya hoga agr hote toh puchta kaisa rha experience clg ka.....
theek hh fir chalte hh ham 🙂..!!
`

    // Simple typewriter effect, har character ek ek karke (fast)
    useEffect(() => {
        let i = 0
        function type() {
            if (i < message.length) {
                setDisplayText(prev => prev + message[i])
                i++
                setTimeout(type, 1)
            } else {
                setIsTyping(false)
            }
        }
        type()
        // eslint-disable-next-line
    }, [])

    // Music auto-play on mount, loop forever
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = true
            audioRef.current.volume = 0.5
            audioRef.current.play().catch(() => {})
        }
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
                    <div className="text-lg md:text-2xl text-white leading-relaxed font-light" style={{ whiteSpace: "pre-line", textAlign: "left" }}>
                        {displayText}
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