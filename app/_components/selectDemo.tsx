import { Select } from "../../lib/pixelartui";

export const BasicDemo = () => {
    return (
        <Select
            display="Vehicle"
            options={[
                {
                    label: "Car",
                    value: "car",
                },
                {
                    label: "Lorry",
                    value: "lorry",
                },
                {
                    label: "Bike",
                    value: "bike",
                },
                {
                    label: "Motorbike",
                    value: "motorbike",
                },
            ]}
            selectLabel="My Select"
            selectName="my-select"
            type="main"
        />
    );
};

export const SelectType = () => {
    return (
        <div className="cp-type-container">
            <Select
                display="Vehicle"
                options={[
                    {
                        label: "Car",
                        value: "car",
                    },
                    {
                        label: "Lorry",
                        value: "lorry",
                    },
                    {
                        label: "Bike",
                        value: "bike",
                    },
                    {
                        label: "Motorbike",
                        value: "motorbike",
                    },
                ]}
                selectLabel="My Select"
                selectName="my-select"
                type="main"
            />
            <Select
                display="Vehicle"
                options={[
                    {
                        label: "Car",
                        value: "car",
                    },
                    {
                        label: "Lorry",
                        value: "lorry",
                    },
                    {
                        label: "Bike",
                        value: "bike",
                    },
                    {
                        label: "Motorbike",
                        value: "motorbike",
                    },
                ]}
                selectLabel="My Select"
                selectName="my-select"
                type="inline"
            />
        </div>
    );
};

export const SelectNoLabel = () => {
    return (
        <Select
            display="Vehicle"
            options={[
                {
                    label: "Car",
                    value: "car",
                },
                {
                    label: "Lorry",
                    value: "lorry",
                },
                {
                    label: "Bike",
                    value: "bike",
                },
                {
                    label: "Motorbike",
                    value: "motorbike",
                },
            ]}
            selectLabel="My Select"
            selectName="my-select"
            type="main"
            noLabel
        />
    );
};

export const SelectCustomSize = () => {
    return (
        <Select
            display="Vehicle"
            options={[
                {
                    label: "Car",
                    value: "car",
                },
                {
                    label: "Lorry",
                    value: "lorry",
                },
                {
                    label: "Bike",
                    value: "bike",
                },
                {
                    label: "Motorbike",
                    value: "motorbike",
                },
            ]}
            selectLabel="My Select"
            selectName="my-select"
            type="main"
            width="700px"
            height="150px"
        />
    );
};

export const SelectFullwidth = () => {
    return (
        <Select
            display="Vehicle"
            options={[
                {
                    label: "Car",
                    value: "car",
                },
                {
                    label: "Lorry",
                    value: "lorry",
                },
                {
                    label: "Bike",
                    value: "bike",
                },
                {
                    label: "Motorbike",
                    value: "motorbike",
                },
            ]}
            selectLabel="My Select"
            selectName="my-select"
            type="main"
            fullwidth
        />
    );
};

export const SelectDisabled = () => {
    return (
        <Select
            display="Vehicle"
            options={[
                {
                    label: "Car",
                    value: "car",
                },
                {
                    label: "Lorry",
                    value: "lorry",
                },
                {
                    label: "Bike",
                    value: "bike",
                },
                {
                    label: "Motorbike",
                    value: "motorbike",
                },
            ]}
            selectLabel="My Select"
            selectName="my-select"
            type="main"
            disabled
        />
    );
};

export const SelectError = () => {
    return (
        <Select
            display="Vehicle"
            options={[
                {
                    label: "Car",
                    value: "car",
                },
                {
                    label: "Lorry",
                    value: "lorry",
                },
                {
                    label: "Bike",
                    value: "bike",
                },
                {
                    label: "Motorbike",
                    value: "motorbike",
                },
            ]}
            selectLabel="My Select"
            selectName="my-select"
            type="main"
            error
        />
    );
};

export const SelectCustomColor = () => {
    return (
        <Select
            display="Vehicle"
            options={[
                {
                    label: "Car",
                    value: "car",
                },
                {
                    label: "Lorry",
                    value: "lorry",
                },
                {
                    label: "Bike",
                    value: "bike",
                },
                {
                    label: "Motorbike",
                    value: "motorbike",
                },
            ]}
            selectLabel="My Select"
            selectName="my-select"
            type="main"
            backgroundColor="#b13737"
        />
    );
};

export const SelectStyle = () => {
    return (
        <div className="cp-container ">
            <Select
                display="Vehicle"
                options={[
                    {
                        label: "Car",
                        value: "car",
                    },
                    {
                        label: "Lorry",
                        value: "lorry",
                    },
                    {
                        label: "Bike",
                        value: "bike",
                    },
                    {
                        label: "Motorbike",
                        value: "motorbike",
                    },
                ]}
                selectLabel="My Select"
                selectName="my-select"
                type="main"
            />
            <div className="cp-dark-bg">
                <Select
                    display="Vehicle"
                    options={[
                        {
                            label: "Car",
                            value: "car",
                        },
                        {
                            label: "Lorry",
                            value: "lorry",
                        },
                        {
                            label: "Bike",
                            value: "bike",
                        },
                        {
                            label: "Motorbike",
                            value: "motorbike",
                        },
                    ]}
                    selectLabel="My Select"
                    selectName="my-select"
                    type="main"
                    selectStyle="light"
                />
            </div>
        </div>
    );
};
