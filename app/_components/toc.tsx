"use client";
import type { Heading } from "nextra";
import { Box } from "pixelartui-react";
import type { FC } from "react";

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
    return (
        <div className="toc-cp  collapse lg:visible h-fit lg:w-[25%]">
            <Box className="h-fi" fullwidth>
                <div className="flex flex-col px-2 pb-5 bg-[#bae1ff] w-full">
                    <h5 className="w-full text-center">Table of Contents</h5>
                    <ul className="list-none m-0 p-0 text-[12px] flex flex-col gap-2">
                        {toc.map((heading) => (
                            <li className="flex items-start" key={heading.id}>
                                {heading.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </Box>
        </div>
    );
};
