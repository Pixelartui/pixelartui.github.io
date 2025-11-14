"use client";

import Link from "next/link";
import { Button } from "pixelartui-react";

export default function Home() {
    return (
        <div className="bg-[url(./assets/images/bg-main.jpg)] bg-cover w-screen h-screen text-white flex flex-col gap-3 justify-center items-center">
            <Link href="/documentation">
                <Button
                    text={"Get Started"}
                    buttonSize={"large"}
                    buttonType={"main"}
                    onClick={() => {}}
                    buttonStyle="light"
                    round
                />
            </Link>
            <Link href="https://github.com/Pixelartui">
                <Button
                    text={"GITHUB"}
                    buttonSize={"large"}
                    buttonType={"main"}
                    onClick={() => {}}
                    buttonStyle="light"
                    round
                />
            </Link>
        </div>
    );
}
