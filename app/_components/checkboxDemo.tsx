import { Checkbox, mockFunction } from "../../lib/pixelartui";

export const BasicDemo = () => {
    return (
        <Checkbox
            label="I agree to the terms"
            name="agreement"
            type="main"
            onChange={mockFunction}
        />
    );
};

export const CheckboxTypes = () => {
    return (
        <div className="flex items-end gap-10">
            <Checkbox
                label="I agree to the terms"
                name="agreement"
                type="main"
                onChange={mockFunction}
            />
            <Checkbox
                label="I agree to the terms"
                name="agreement"
                type="inline"
                onChange={mockFunction}
            />
        </div>
    );
};

export const CheckboxDefaultChecked = () => {
    return (
        <Checkbox
            label="I agree to the terms"
            name="agreement"
            type="main"
            onChange={mockFunction}
            defaultChecked
        />
    );
};

export const CheckboxNoLabel = () => {
    return (
        <Checkbox
            label="I agree to the terms"
            name="agreement"
            type="main"
            onChange={mockFunction}
            noLabel
        />
    );
};

export const CheckboxDisabled = () => {
    return (
        <Checkbox
            label="I agree to the terms"
            name="agreement"
            type="main"
            onChange={mockFunction}
            disabled
        />
    );
};

export const CheckboxCustomBackground = () => {
    return (
        <Checkbox
            label="I agree to the terms"
            name="agreement"
            type="main"
            onChange={mockFunction}
            backgroundColor="#05EB57"
        />
    );
};

export const CheckboxStyles = () => {
    return (
        <div className="flex items-end gap-10">
            <Checkbox
                label="I agree to the terms"
                name="agreement"
                type="main"
                onChange={mockFunction}
                checkboxStyle="dark"
            />
            <div className="p-5 bg-black">
                <Checkbox
                    label="I agree to the terms"
                    name="agreement"
                    type="main"
                    onChange={mockFunction}
                    checkboxStyle="light"
                />
            </div>
        </div>
    );
};
