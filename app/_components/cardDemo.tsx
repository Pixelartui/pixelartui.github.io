"use client";

import { Card, Button, mockFunction } from "../../lib/pixelartui";

export const CardDefault = () => {
    return (
        <Card>
            <p>This is a basic card with some content.</p>
        </Card>
    );
};

export const CardWithTitle = () => {
    return (
        <Card title="Card Title">
            <p>This is a card with a title and body content.</p>
        </Card>
    );
};

export const CardWithFooter = () => {
    return (
        <Card
            title="Card Title"
            footer={
                <Button
                    text="Action"
                    buttonSize="small"
                    buttonType="main"
                    onClick={mockFunction}
                />
            }
        >
            <p>This card has a title, body, and a footer with an action button.</p>
        </Card>
    );
};

export const CardCustomBackground = () => {
    return (
        <Card title="Custom Color" backgroundColor="#05EB57">
            <p>A card with a custom background color.</p>
        </Card>
    );
};

export const CardStyles = () => {
    return (
        <div className="flex items-end gap-10">
            <Card title="Dark" cardStyle="dark">
                <p>Dark style card.</p>
            </Card>
            <div className="p-5 bg-black">
                <Card title="Light" cardStyle="light">
                    <p>Light style card.</p>
                </Card>
            </div>
        </div>
    );
};
