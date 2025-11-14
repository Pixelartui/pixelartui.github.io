"use client";

import { usePathname } from "next/navigation";
import type { PageMapItem } from "nextra";
import { Anchor } from "nextra/components";
import { normalizePages } from "nextra/normalize-pages";
import { Box, Select } from "pixelartui-react";
import type { FC } from "react";

export const Sidebar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
    const pathname = usePathname();
    console.log(pathname, pageMap);
    const { docsDirectories } = normalizePages({
        list: pageMap,
        route: pathname,
    });
    console.log(docsDirectories);
    return (
        <div className="sidebar-cp mb-5 lg:mb-0 lg:w-[25%]">
            <Box
                fullwidth
                className="sidebar-container h-full w-full"
                backgroundColor="#bae1ff"
            >
                <div className="flex flex-col w-full">
                    <ul className="flex flex-col gap-2 list-none justify-center w-full m-0 p-0">
                        <li>
                            <Anchor
                                className="text-inherit no-underline visited:text-black"
                                href={"/documentation"}
                            >
                                <Box
                                    fullwidth
                                    backgroundColor={
                                        pathname === "/documentation"
                                            ? "#ffb3ba"
                                            : ""
                                    }
                                >
                                    <div className="p-2 text-[20px]">
                                        Overview
                                    </div>
                                </Box>
                            </Anchor>
                        </li>

                        {docsDirectories
                            .filter(
                                (filterItem) =>
                                    filterItem.name === "documentation"
                            )[0]
                            .children.map(function renderItem(item) {
                                const route =
                                    item.route ||
                                    ("href" in item
                                        ? (item.href as string)
                                        : "");
                                const { title, route: menuRoute } = item;

                                return (
                                    <li key={route}>
                                        {"children" in item ? (
                                            <Box fullwidth>
                                                <details className="w-full p-2 text-[20px]">
                                                    <summary>{title}</summary>
                                                    <div className="flex flex-col gap-1">
                                                        {item.children.map(
                                                            (child) => (
                                                                <Anchor
                                                                    className="text-inherit no-underline visited:text-black"
                                                                    key={
                                                                        child.name
                                                                    }
                                                                    href={
                                                                        child.route
                                                                    }
                                                                >
                                                                    <Box
                                                                        fullwidth
                                                                        backgroundColor={
                                                                            pathname ===
                                                                            child.route
                                                                                ? "#ffb3ba"
                                                                                : ""
                                                                        }
                                                                    >
                                                                        <div className="p-2 text-[20px]">
                                                                            {
                                                                                child.title
                                                                            }
                                                                        </div>
                                                                    </Box>
                                                                </Anchor>
                                                            )
                                                        )}
                                                    </div>
                                                </details>
                                            </Box>
                                        ) : (
                                            <Anchor
                                                className="no-underline visited:text-black text-inherit"
                                                href={route}
                                            >
                                                <Box
                                                    backgroundColor={
                                                        pathname === menuRoute
                                                            ? "#ffb3ba"
                                                            : ""
                                                    }
                                                    fullwidth
                                                >
                                                    <div className="p-2 text-[20px]">
                                                        {title}
                                                    </div>
                                                </Box>
                                            </Anchor>
                                        )}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </Box>
        </div>
    );
};
