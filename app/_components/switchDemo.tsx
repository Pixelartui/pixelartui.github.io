import { Switch, mockFunction } from "../../lib/pixelartui";

export const BasicDemo = () => {
    return (
        <Switch label="Note" name="name" type="main" onChange={mockFunction} />
    );
};

export const SwitchTypes = () => {
    return (
        <div className="flex items-end gap-10">
            <Switch
                label="Note"
                name="name"
                type="main"
                onChange={mockFunction}
            />
            <Switch
                label="Note"
                name="name"
                type="inline"
                onChange={mockFunction}
            />
        </div>
    );
};

export const SwitchDefaultChecked = () => {
    return (
        <Switch
            label="Note"
            name="name"
            type="main"
            onChange={mockFunction}
            defaultChecked
        />
    );
};

export const SwitchNoLabel = () => {
    return (
        <Switch
            label="Note"
            name="name"
            type="main"
            onChange={mockFunction}
            noLabel
        />
    );
};

export const SwitchCustomBackground = () => {
    return (
        <Switch
            label="Note"
            name="name"
            type="main"
            onChange={mockFunction}
            backgroundColor="#05EB57"
        />
    );
};

export const SwitchStyles = () => {
    return (
        <div className="flex items-end gap-10">
            <Switch
                label="Note"
                name="name"
                type="main"
                onChange={mockFunction}
                switchStyle="dark"
            />
            <div className="p-5 bg-black">
                <Switch
                    label="Note"
                    name="name"
                    type="main"
                    onChange={mockFunction}
                    switchStyle="light"
                />
            </div>
        </div>
    );
};
