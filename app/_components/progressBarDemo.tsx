"use client";

import { ProgressBar } from "../../lib/pixelartui";

export const ProgressBarDefault = () => {
    return <ProgressBar value={50} />;
};

export const ProgressBarWithLabel = () => {
    return <ProgressBar value={65} label="Loading..." />;
};

export const ProgressBarShowValue = () => {
    return <ProgressBar value={75} showValue />;
};

export const ProgressBarComplete = () => {
    return <ProgressBar value={100} label="Complete" showValue />;
};

export const ProgressBarEmpty = () => {
    return <ProgressBar value={0} />;
};

export const ProgressBarCustomMax = () => {
    return <ProgressBar value={3} max={5} label="Steps" showValue />;
};

export const ProgressBarCustomColors = () => {
    return (
        <ProgressBar
            value={60}
            backgroundColor="#1a1a2e"
            fillColor="#05EB57"
            showValue
        />
    );
};

export const ProgressBarStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <ProgressBar value={40} progressBarStyle="dark" label="Dark" />
            <div className="p-5 bg-black">
                <ProgressBar value={40} progressBarStyle="light" label="Light" />
            </div>
        </div>
    );
};
