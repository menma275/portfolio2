"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { db } from "@/lib/firebaseConfig";
import { ref, get, set, runTransaction } from "firebase/database";

export default function FootPrint() {

    const [count, setCount] = useState(0);
    const [isCounted, setIsCounted] = useState(false);
    const spanAnimation = useAnimation();

    useEffect(() => {
        const fetchCount = async () => {
            const countRef = ref(db, "counts/countValue");
            const countGet = await get(countRef);
            if(countGet.exists()) {
                setCount(countGet.val());
            } else {
                await set(countRef, 0);
            }
        }
        fetchCount();
    }, [])

    const countUp = async () => {
        if(!isCounted) {
            spanAnimation.start({
                rotate: 0,
                y: -65,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 0.1
                }
            })

            const countRef = ref(db, "counts/countValue");
            await runTransaction(countRef, (currentCount) => {
                if(currentCount === null) {
                    return 0;
                }
                return currentCount + 1;
            }).then((result) => {
                if(result.committed) {
                    setCount(result.snapshot.val());
                }
            })
            setIsCounted(true);
        }
    };

    return (
        <div
          className="mt-12 w-full rounded-xl p-5 bg-gradient-to-br from-white via-amber-50 to-orange-100 bg-opacity-10 border-2 border-white transition-all duration-500 cursor-pointer relative overflow-hidden"
          onClick={countUp}
        >
            <div>
                <h2 className="font-bold text-[var(--accent)]">Click to say Hello!</h2>
                <p className="text-sm font-light"></p>
            </div>
            <motion.span animate={spanAnimation} className="text-4xl z-10 absolute right-5 -bottom-14 -rotate-6">👋</motion.span>
            <span className="text-6xl z-0 text-white absolute -right-2 -bottom-4 font-bold">{count}</span>
        </div>
    );
}