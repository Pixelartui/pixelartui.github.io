"use client";

import { Breadcrumb, mockFunction } from "../../lib/pixelartui";

export const BreadcrumbDefault = () => {
    return (
        <Breadcrumb
            items={[
                { label: "Home", href: "#" },
                { label: "Products", href: "#" },
                { label: "Current Page" },
            ]}
        />
    );
};

export const BreadcrumbWithOnClick = () => {
    return (
        <Breadcrumb
            items={[
                { label: "Home", onClick: mockFunction },
                { label: "Category", onClick: mockFunction },
                { label: "Item" },
            ]}
        />
    );
};

export const BreadcrumbCustomSeparator = () => {
    return (
        <Breadcrumb
            items={[
                { label: "Home", href: "#" },
                { label: "Products", href: "#" },
                { label: "Current Page" },
            ]}
            separator="/"
        />
    );
};

export const BreadcrumbTwoItems = () => {
    return (
        <Breadcrumb
            items={[
                { label: "Home", href: "#" },
                { label: "Page" },
            ]}
        />
    );
};

export const BreadcrumbStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Breadcrumb
                items={[
                    { label: "Home", href: "#" },
                    { label: "Page" },
                ]}
                breadcrumbStyle="dark"
            />
            <div className="p-5 bg-black">
                <Breadcrumb
                    items={[
                        { label: "Home", href: "#" },
                        { label: "Page" },
                    ]}
                    breadcrumbStyle="light"
                />
            </div>
        </div>
    );
};
