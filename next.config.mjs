import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
    output: "export",
    reactStrictMode: true,
    turbopack: {
        resolveAlias: {
            // Path to your `mdx-components` file with extension
            "next-mdx-import-source-file": "/mdx-components.jsx",
        },
    },
});
