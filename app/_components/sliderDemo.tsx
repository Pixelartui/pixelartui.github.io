"use client";

import { Slider, mockFunction } from "../../lib/pixelartui";

export const SliderDefault = () => {
    return (
        <Slider label="Volume" type="main" name="volume" onChange={mockFunction} />
    );
};

export const SliderInline = () => {
    return (
        <Slider
            label="Brightness"
            type="inline"
            name="brightness"
            onChange={mockFunction}
        />
    );
};

export const SliderCustomRange = () => {
    return (
        <Slider
            label="Temperature"
            type="main"
            name="temperature"
            min={0}
            max={50}
            step={5}
            defaultValue={25}
            onChange={mockFunction}
        />
    );
};

export const SliderDisabled = () => {
    return (
        <Slider
            label="Disabled"
            type="main"
            name="disabled"
            defaultValue={40}
            disabled
            onChange={mockFunction}
        />
    );
};

export const SliderNoLabel = () => {
    return (
        <Slider
            label="Hidden"
            type="main"
            name="nolabel"
            noLabel
            onChange={mockFunction}
        />
    );
};

export const SliderCustomBackground = () => {
    return (
        <Slider
            label="Custom color"
            type="main"
            name="custom"
            backgroundColor="#05EB57"
            defaultValue={60}
            onChange={mockFunction}
        />
    );
};

export const SliderStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Slider
                label="Dark style"
                type="main"
                name="dark"
                sliderStyle="dark"
                onChange={mockFunction}
            />
            <div className="p-5 bg-black">
                <Slider
                    label="Light style"
                    type="main"
                    name="light"
                    sliderStyle="light"
                    onChange={mockFunction}
                />
            </div>
        </div>
    );
};
