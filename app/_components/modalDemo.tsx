"use client";

import { useState } from "react";
import { Button, Modal } from "../../lib/pixelartui";

export const ModalDemo = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                buttonSize="medium"
                buttonType="main"
                text="Open modal"
                onClick={() => setOpen(true)}
            />
            <Modal
                actionButtons={{
                    left: "Cancel",
                    right: "OK",
                }}
                handleClose={() => {
                    setOpen(false);
                }}
                header="Attention"
                name="story-modal"
                onClickButtonLeft={() => {}}
                onClickButtonRight={() => {
                    setOpen(false);
                }}
                open={open}
            >
                <div>This is a content</div>
            </Modal>
        </>
    );
};

export const ModalCustomColor = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                buttonSize="medium"
                buttonType="main"
                text="Open custom color modal"
                onClick={() => setOpen(true)}
            />
            <Modal
                actionButtons={{
                    left: "Cancel",
                    right: "OK",
                }}
                handleClose={() => {
                    setOpen(false);
                }}
                header="Attention"
                name="story-modal"
                onClickButtonLeft={() => {}}
                onClickButtonRight={() => {
                    setOpen(false);
                }}
                open={open}
                backgroundColor="#b13737"
            >
                <div>This is a content</div>
            </Modal>
        </>
    );
};

export const ModalCustomHeader = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                buttonSize="medium"
                buttonType="main"
                text="Open custom header modal"
                onClick={() => setOpen(true)}
            />
            <Modal
                actionButtons={{
                    left: "Cancel",
                    right: "OK",
                }}
                handleClose={() => {
                    setOpen(false);
                }}
                name="story-modal"
                onClickButtonLeft={() => {}}
                onClickButtonRight={() => {
                    setOpen(false);
                }}
                open={open}
                customHeader={
                    <Button
                        text="Custom Header Component"
                        buttonSize={"small"}
                        buttonType={"main"}
                        onClick={() => {}}
                    />
                }
            >
                <div>This is a content</div>
            </Modal>
        </>
    );
};

export const ModalCustomActions = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                buttonSize="medium"
                buttonType="main"
                text="Open custom action modal"
                onClick={() => setOpen(true)}
            />
            <Modal
                header="This is the header"
                actionButtons={{
                    left: "Cancel",
                    right: "OK",
                }}
                handleClose={() => {
                    setOpen(false);
                }}
                name="story-modal"
                onClickButtonLeft={() => {}}
                onClickButtonRight={() => {
                    setOpen(false);
                }}
                open={open}
                customAction={
                    <div>
                        <Button
                            text="Custom Action 1"
                            buttonSize={"small"}
                            buttonType={"main"}
                            onClick={() => {
                                alert("Custom Action 1");
                            }}
                        />
                        <Button
                            text="Custom Action 2"
                            buttonSize={"small"}
                            buttonType={"main"}
                            onClick={() => {
                                alert("Custom Action 2");
                            }}
                        />
                        <Button
                            text="Custom Action 3"
                            buttonSize={"small"}
                            buttonType={"main"}
                            onClick={() => {
                                alert("Custom Action 3");
                            }}
                        />
                    </div>
                }
            >
                <div>This is a content</div>
            </Modal>
        </>
    );
};

export const ModalCustomSize = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                buttonSize="medium"
                buttonType="main"
                text="Open custom size modal"
                onClick={() => setOpen(true)}
            />
            <Modal
                actionButtons={{
                    left: "Cancel",
                    right: "OK",
                }}
                handleClose={() => {
                    setOpen(false);
                }}
                header="Attention"
                name="story-modal"
                onClickButtonLeft={() => {}}
                onClickButtonRight={() => {
                    setOpen(false);
                }}
                open={open}
                width="800px"
                height="300px"
            >
                <div>This is a content</div>
            </Modal>
        </>
    );
};

export const ModalDisabled = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                buttonSize="medium"
                buttonType="main"
                text="Open disabled modal"
                onClick={() => setOpen(true)}
            />
            <Modal
                actionButtons={{
                    left: "Cancel",
                    right: "OK",
                }}
                handleClose={() => {
                    setOpen(false);
                }}
                header="Attention"
                name="story-modal"
                onClickButtonLeft={() => {}}
                onClickButtonRight={() => {
                    setOpen(false);
                }}
                open={open}
                disabled
            >
                <div>This is a content</div>
            </Modal>
        </>
    );
};

export const ModalLightStyle = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                buttonSize="medium"
                buttonType="main"
                text="Open light modal"
                onClick={() => setOpen(true)}
            />
            <Modal
                actionButtons={{
                    left: "Cancel",
                    right: "OK",
                }}
                handleClose={() => {
                    setOpen(false);
                }}
                header="Attention"
                name="story-modal"
                onClickButtonLeft={() => {}}
                onClickButtonRight={() => {
                    setOpen(false);
                }}
                open={open}
                modalStyle="light"
            >
                <div>This is a content</div>
            </Modal>
        </>
    );
};
