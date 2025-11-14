import type { FC, ReactNode } from "react";
import "@fontsource/pixelify-sans";
import "./globals.css";

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
    return (
        <html lang="en" dir="ltr">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
