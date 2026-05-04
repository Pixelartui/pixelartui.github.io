"use client";

import { Checkbox, mockFunction } from "../../lib/pixelartui";

export const CheckboxDefault = () => {
    return (
        <Checkbox
            label="Accept terms"
            type="main"
            name="terms"
            onChange={mockFunction}
        />
    );
};

export const CheckboxInline = () => {
    return (
        <Checkbox
            label="Subscribe"
            type="inline"
            name="subscribe"
            onChange={mockFunction}
        />
    );
};

export const CheckboxDefaultChecked = () => {
    return (
        <Checkbox
            label="Pre-selected"
            type="main"
            name="preselected"
            defaultChecked
            onChange={mockFunction}
        />
    );
};

export const CheckboxDisabled = () => {
    return (
        <Checkbox
            label="Disabled"
            type="main"
            name="disabled"
            disabled
            onChange={mockFunction}
        />
    );
};

export const CheckboxNoLabel = () => {
    return (
        <Checkbox
            label="Hidden"
            type="main"
            name="nolabel"
            noLabel
            onChange={mockFunction}
        />
    );
};

export const CheckboxCustomBackground = () => {
    return (
        <Checkbox
            label="Custom color"
            type="main"
            name="custom"
            backgroundColor="#05EB57"
            onChange={mockFunction}
        />
    );
};

export const CheckboxStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Checkbox
                label="Dark style"
                type="main"
                name="dark"
                checkboxStyle="dark"
                onChange={mockFunction}
            />
            <div className="p-5 bg-black">
                <Checkbox
                    label="Light style"
                    type="main"
                    name="light"
                    checkboxStyle="light"
                    onChange={mockFunction}
                />
            </div>
        </div>
    );
};
