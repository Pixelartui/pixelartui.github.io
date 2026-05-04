"use client";

import { Radio, mockFunction } from "../../lib/pixelartui";

export const RadioDefault = () => {
    return (
        <div className="flex flex-col gap-4">
            <Radio
                label="Option A"
                type="main"
                name="demo"
                value="a"
                onChange={mockFunction}
            />
            <Radio
                label="Option B"
                type="main"
                name="demo"
                value="b"
                onChange={mockFunction}
            />
        </div>
    );
};

export const RadioInline = () => {
    return (
        <div className="flex gap-4">
            <Radio
                label="Option A"
                type="inline"
                name="inline-demo"
                value="a"
                onChange={mockFunction}
            />
            <Radio
                label="Option B"
                type="inline"
                name="inline-demo"
                value="b"
                onChange={mockFunction}
            />
        </div>
    );
};

export const RadioDefaultChecked = () => {
    return (
        <div className="flex flex-col gap-4">
            <Radio
                label="Option A"
                type="main"
                name="checked-demo"
                value="a"
                defaultChecked
                onChange={mockFunction}
            />
            <Radio
                label="Option B"
                type="main"
                name="checked-demo"
                value="b"
                onChange={mockFunction}
            />
        </div>
    );
};

export const RadioDisabled = () => {
    return (
        <Radio
            label="Disabled"
            type="main"
            name="disabled-demo"
            value="disabled"
            disabled
            onChange={mockFunction}
        />
    );
};

export const RadioCustomBackground = () => {
    return (
        <div className="flex flex-col gap-4">
            <Radio
                label="Option A"
                type="main"
                name="color-demo"
                value="a"
                backgroundColor="#05EB57"
                defaultChecked
                onChange={mockFunction}
            />
            <Radio
                label="Option B"
                type="main"
                name="color-demo"
                value="b"
                backgroundColor="#05EB57"
                onChange={mockFunction}
            />
        </div>
    );
};

export const RadioStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Radio
                label="Dark style"
                type="main"
                name="dark-demo"
                value="dark"
                radioStyle="dark"
                onChange={mockFunction}
            />
            <div className="p-5 bg-black">
                <Radio
                    label="Light style"
                    type="main"
                    name="light-demo"
                    value="light"
                    radioStyle="light"
                    onChange={mockFunction}
                />
            </div>
        </div>
    );
};
