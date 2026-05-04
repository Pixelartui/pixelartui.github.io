"use client";

import { Alert, mockFunction } from "../../lib/pixelartui";

export const AlertInfo = () => {
    return <Alert message="This is an informational message." variant="info" />;
};

export const AlertSuccess = () => {
    return <Alert message="Operation completed successfully!" variant="success" />;
};

export const AlertWarning = () => {
    return <Alert message="Please review before continuing." variant="warning" />;
};

export const AlertError = () => {
    return <Alert message="Something went wrong." variant="error" />;
};

export const AlertWithTitle = () => {
    return (
        <Alert
            title="Heads up!"
            message="This alert has a title and a message."
            variant="info"
        />
    );
};

export const AlertDismissible = () => {
    return (
        <Alert
            message="You can dismiss this alert."
            variant="info"
            dismissible
            onDismiss={mockFunction}
        />
    );
};

export const AlertStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Alert
                message="Dark style alert."
                variant="info"
                alertStyle="dark"
            />
            <div className="p-5 bg-black">
                <Alert
                    message="Light style alert."
                    variant="info"
                    alertStyle="light"
                />
            </div>
        </div>
    );
};
