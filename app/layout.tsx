import { Layout } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { NavbarComponent } from "./_components/navbar";
import "nextra-theme-docs/style.css";
import { FooterComponent } from "./_components/footer";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={<NavbarComponent />}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/Pixelartui/pixelartui.github.io"
                    footer={<FooterComponent />}
                    editLink={false}
                    darkMode={true}
                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
