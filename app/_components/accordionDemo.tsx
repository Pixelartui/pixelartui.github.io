"use client";

import { Accordion, mockFunction } from "../../lib/pixelartui";

const defaultItems = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
];

export const AccordionDefault = () => {
    return <Accordion items={defaultItems} onChange={mockFunction} />;
};

export const AccordionDefaultOpen = () => {
    return (
        <Accordion
            items={defaultItems}
            defaultOpenIndexes={[0]}
            onChange={mockFunction}
        />
    );
};

export const AccordionMultiple = () => {
    return (
        <Accordion
            items={defaultItems}
            allowMultiple
            defaultOpenIndexes={[0, 2]}
            onChange={mockFunction}
        />
    );
};

export const AccordionWithDisabled = () => {
    return (
        <Accordion
            items={[
                { title: "Section 1", content: "Content for section 1" },
                {
                    title: "Section 2 (Disabled)",
                    content: "Content for section 2",
                    disabled: true,
                },
                { title: "Section 3", content: "Content for section 3" },
            ]}
            onChange={mockFunction}
        />
    );
};

export const AccordionCustomBackground = () => {
    return (
        <Accordion
            items={defaultItems}
            backgroundColor="#05EB57"
            onChange={mockFunction}
        />
    );
};

export const AccordionStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Accordion
                items={defaultItems}
                accordionStyle="dark"
                onChange={mockFunction}
            />
            <div className="p-5 bg-black">
                <Accordion
                    items={defaultItems}
                    accordionStyle="light"
                    onChange={mockFunction}
                />
            </div>
        </div>
    );
};
