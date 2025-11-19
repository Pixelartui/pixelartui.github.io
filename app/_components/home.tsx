"use client";
import { motion } from "framer-motion";
import { Button } from "pixelartui-react";
import { Link } from "nextra-theme-docs";
import { MouseEvent } from "react";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-8 font-mono">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl mb-4 text-pink-500 drop-shadow-[0_0_10px_#ff00ff]"
            >
                PixelArtUI
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-center max-w-2xl text-cyan-300 drop-shadow-[0_0_6px_#00ffff]"
            >
                A retro-themed component library inspired by 80s arcade
                aesthetics. Build interfaces with neon grids, pixel perfection,
                and glowing nostalgia.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-10 flex gap-6"
            >
                <Link
                    href="/doc"
                    className="no-underline px-6 py-3 rounded-2xl text-lg transition shadow-[0_0_10px_#ff00ff]"
                >
                    <Button
                        backgroundColor="#F6339A"
                        text={"Get Started"}
                        buttonSize={"medium"}
                        buttonType={"main"}
                        onClick={() => {}}
                        height="60px"
                        buttonStyle="light"
                        width="220px"
                    />
                </Link>
                <Link
                    href="/doc/components/box"
                    className="no-underline px-6 py-3 rounded-2xl text-lg transition shadow-[0_0_10px_#00ffff]"
                >
                    <Button
                        backgroundColor="#0092B9"
                        text={"Documentations"}
                        buttonSize={"medium"}
                        buttonType={"main"}
                        onClick={() => {}}
                        height="60px"
                        buttonStyle="light"
                    />
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 w-full flex justify-center"
            >
                <div className="text-sm text-gray-400 tracking-widest drop-shadow-[0_0_4px_#ffffff55]">
                    © {new Date().getFullYear()} PixelArtUI — Built with neon
                    love
                </div>
            </motion.div>
        </div>
    );
}
