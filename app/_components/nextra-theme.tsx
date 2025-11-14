"use client";
import type { PageMapItem } from "nextra";
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { Box } from "pixelartui-react";

export const NextraTheme: FC<{
    children: ReactNode;
    pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
    return (
        <Box backgroundColor="#bae1ff" fullwidth className="min-h-dvh">
            <div className="flex flex-col w-full">
                <div className="flex p-10 bg-[#bae1ff]">
                    <h1>PIXELARTUI</h1>
                </div>
                <div className="flex flex-col h-full pt-5 pb-5 lg:flex-row lg:w-full">
                    <Sidebar pageMap={pageMap} />
                    <div className="lg:w-full">{children}</div>
                </div>
                <Footer />
            </div>
        </Box>
    );
};
