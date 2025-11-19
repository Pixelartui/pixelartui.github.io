import { TextArea, mockFunction } from "../../lib/pixelartui";

export const BasicExample = () => {
    return <TextArea inputName="name" label="Note" type="main" />;
};

export const TextAreaType = () => {
    return (
        <div className="flex items-end gap-10">
            <TextArea
                inputName="name"
                label="Note"
                type="main"
                width="200px"
                height="200px"
            />
            <TextArea
                inputName="name"
                label="Note"
                type="inline"
                width="200px"
                height="200px"
            />
        </div>
    );
};

export const TextAreaCustomSize = () => {
    return (
        <TextArea
            inputName="name"
            label="Note"
            type="main"
            width="400px"
            height="200px"
        />
    );
};

export const TextAreaFullwidth = () => {
    return <TextArea inputName="name" label="Note" type="main" fullwidth />;
};

export const TextAreaPlaceholder = () => {
    return (
        <TextArea
            inputName="name"
            label="Note"
            type="main"
            placeholder="The placeholder"
        />
    );
};

export const TextAreaNoLabel = () => {
    return <TextArea inputName="name" label="Note" type="main" noLabel />;
};

export const TextAreaError = () => {
    return <TextArea inputName="name" label="Note" type="main" error />;
};

export const TextAreaHelperText = () => {
    return (
        <TextArea inputName="name" label="Note" type="main" helperText="help" />
    );
};

export const TextAreaDisabled = () => {
    return <TextArea inputName="name" label="Note" type="main" disabled />;
};

export const TextAreaCustomColor = () => {
    return (
        <TextArea
            inputName="name"
            label="Note"
            type="main"
            backgroundColor="#b13737"
        />
    );
};

export const TextAreaStyle = () => {
    return (
        <div className="flex items-end gap-10">
            <TextArea
                inputName="name"
                label="Note"
                type="main"
                width="200px"
                height="200px"
                textAreaStyle="dark"
                helperText="help"
            />

            <div className="bg-black p-3">
                <TextArea
                    inputName="name"
                    label="Note"
                    type="main"
                    width="200px"
                    height="200px"
                    textAreaStyle="light"
                    helperText="help"
                />
            </div>
        </div>
    );
};
