import type { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="h-50 bg-[#bae1ff] flex justify-center items-center">
            Powered by Nextra {new Date().getFullYear()}
        </footer>
    );
};
