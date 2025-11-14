import {
    useMDXComponents as getNextraComponents,
    MDXComponents,
} from "nextra/mdx-components";
import { TOC } from "./app/_components/toc";

const defaultComponents = getNextraComponents({
    wrapper({ children, toc }) {
        return (
            <div className="lg:flex lg:w-full">
                <div className="doc-content whitespace-pre-wrap px-5 lg:w-[75%] lg:overflow-auto lg:h-lvh">
                    {children}
                </div>
                <TOC toc={toc} />
            </div>
        );
    },
});

export const useMDXComponents = (components: MDXComponents) => ({
    ...defaultComponents,
    ...components,
});
