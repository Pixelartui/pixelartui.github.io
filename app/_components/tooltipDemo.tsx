"use client";

import { Tooltip, Button, mockFunction } from "../../lib/pixelartui";

export const TooltipDefault = () => {
    return (
        <Tooltip text="This is a tooltip">
            <Button text="Hover me" buttonSize="small" buttonType="main" onClick={mockFunction} />
        </Tooltip>
    );
};

export const TooltipPositions = () => {
    return (
        <div className="flex flex-wrap gap-8 py-12">
            <Tooltip text="Top tooltip" position="top">
                <Button text="Top" buttonSize="small" buttonType="main" onClick={mockFunction} />
            </Tooltip>
            <Tooltip text="Bottom tooltip" position="bottom">
                <Button text="Bottom" buttonSize="small" buttonType="main" onClick={mockFunction} />
            </Tooltip>
            <Tooltip text="Left tooltip" position="left">
                <Button text="Left" buttonSize="small" buttonType="main" onClick={mockFunction} />
            </Tooltip>
            <Tooltip text="Right tooltip" position="right">
                <Button text="Right" buttonSize="small" buttonType="main" onClick={mockFunction} />
            </Tooltip>
        </div>
    );
};

export const TooltipCustomBackground = () => {
    return (
        <Tooltip text="Custom color" backgroundColor="#05EB57">
            <Button text="Hover me" buttonSize="small" buttonType="main" onClick={mockFunction} />
        </Tooltip>
    );
};

export const TooltipStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Tooltip text="Dark style" tooltipStyle="dark">
                <Button text="Dark" buttonSize="small" buttonType="main" onClick={mockFunction} />
            </Tooltip>
            <div className="p-5 bg-black">
                <Tooltip text="Light style" tooltipStyle="light">
                    <Button text="Light" buttonSize="small" buttonType="main" onClick={mockFunction} />
                </Tooltip>
            </div>
        </div>
    );
};
