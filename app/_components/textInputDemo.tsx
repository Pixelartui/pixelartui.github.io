import { TextInput } from "../../lib/pixelartui";

export const BasicExample = () => {
    return <TextInput inputName="name" textLabel="Name" type="main" />;
};

export const TextInputType = () => {
    return (
        <div className="flex items-end gap-10">
            <TextInput inputName="name" textLabel="Name" type="main" />
            <TextInput inputName="name" textLabel="Name" type="inline" />
        </div>
    );
};

export const TextInputCustomSize = () => {
    return (
        <TextInput
            inputName="name"
            textLabel="Name"
            type="main"
            width="400px"
            height="200px"
        />
    );
};

export const TextInputFullwidth = () => {
    return (
        <TextInput inputName="name" textLabel="Name" type="main" fullwidth />
    );
};

export const TextInputPlaceholder = () => {
    return (
        <TextInput
            inputName="name"
            textLabel="Name"
            type="main"
            placeholder="The placeholder"
        />
    );
};

export const TextInputNoLabel = () => {
    return <TextInput inputName="name" textLabel="Name" type="main" noLabel />;
};

export const TextInputError = () => {
    return <TextInput inputName="name" textLabel="Name" type="main" error />;
};

export const TextInputHelperText = () => {
    return (
        <TextInput
            inputName="name"
            textLabel="Name"
            type="main"
            helperText="help"
        />
    );
};

export const TextInputDisabled = () => {
    return <TextInput inputName="name" textLabel="Name" type="main" disabled />;
};

export const TextInputCustomColor = () => {
    return (
        <TextInput
            inputName="name"
            textLabel="Name"
            type="main"
            backgroundColor="#b13737"
        />
    );
};

export const TextInputStyle = () => {
    return (
        <div className="flex items-end gap-10">
            <TextInput
                inputName="name"
                textLabel="Name"
                type="main"
                inputStyle="dark"
                helperText="help"
            />

            <div className="bg-black p-3">
                <TextInput
                    inputName="name"
                    textLabel="Name"
                    type="main"
                    inputStyle="light"
                    helperText="help"
                />
            </div>
        </div>
    );
};
