"use client";

import { Badge, mockFunction } from "../../lib/pixelartui";

export const BadgePrimary = () => {
    return <Badge text="Primary" variant="primary" />;
};

export const BadgeVariants = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge text="Primary" variant="primary" />
            <Badge text="Success" variant="success" />
            <Badge text="Error" variant="error" />
            <Badge text="Warning" variant="warning" />
            <Badge text="Info" variant="info" />
        </div>
    );
};

export const BadgeSizes = () => {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <Badge text="Small" size="small" />
            <Badge text="Medium" size="medium" />
            <Badge text="Large" size="large" />
        </div>
    );
};

export const BadgeDismissible = () => {
    return (
        <Badge
            text="Dismiss me"
            variant="info"
            dismissible
            onDismiss={mockFunction}
        />
    );
};

export const BadgeStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Badge text="Dark style" badgeStyle="dark" />
            <div className="p-5 bg-black">
                <Badge text="Light style" badgeStyle="light" />
            </div>
        </div>
    );
};
