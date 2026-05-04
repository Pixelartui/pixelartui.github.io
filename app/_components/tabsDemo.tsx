"use client";

import { Tabs, mockFunction } from "../../lib/pixelartui";

const defaultTabs = [
    { label: "Tab 1", content: "Content for Tab 1" },
    { label: "Tab 2", content: "Content for Tab 2" },
    { label: "Tab 3", content: "Content for Tab 3" },
];

export const TabsDefault = () => {
    return <Tabs tabs={defaultTabs} onChange={mockFunction} />;
};

export const TabsWithDefaultActive = () => {
    return (
        <Tabs tabs={defaultTabs} defaultActiveIndex={1} onChange={mockFunction} />
    );
};

export const TabsWithDisabled = () => {
    return (
        <Tabs
            tabs={[
                { label: "Tab 1", content: "Content for Tab 1" },
                {
                    label: "Tab 2 (Disabled)",
                    content: "Content for Tab 2",
                    disabled: true,
                },
                { label: "Tab 3", content: "Content for Tab 3" },
            ]}
            onChange={mockFunction}
        />
    );
};

export const TabsCustomBackground = () => {
    return (
        <Tabs
            tabs={defaultTabs}
            backgroundColor="#05EB57"
            onChange={mockFunction}
        />
    );
};

export const TabsStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Tabs tabs={defaultTabs} tabsStyle="dark" onChange={mockFunction} />
            <div className="p-5 bg-black">
                <Tabs
                    tabs={defaultTabs}
                    tabsStyle="light"
                    onChange={mockFunction}
                />
            </div>
        </div>
    );
};
