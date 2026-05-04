"use client";

import { ChatPrompt, mockFunction } from "../../lib/pixelartui";

export const ChatPromptDefault = () => {
    return <ChatPrompt inputName="chat" onSend={mockFunction} />;
};

export const ChatPromptWithPlaceholder = () => {
    return (
        <ChatPrompt
            inputName="chat"
            placeholder="Type your message..."
            onSend={mockFunction}
        />
    );
};

export const ChatPromptFullwidth = () => {
    return <ChatPrompt inputName="chat" onSend={mockFunction} fullwidth />;
};

export const ChatPromptCustomSize = () => {
    return (
        <ChatPrompt
            inputName="chat"
            onSend={mockFunction}
            width="600px"
            height="80px"
        />
    );
};

export const ChatPromptDisabled = () => {
    return <ChatPrompt inputName="chat" onSend={mockFunction} disabled />;
};

export const ChatPromptCustomColor = () => {
    return (
        <ChatPrompt
            inputName="chat"
            onSend={mockFunction}
            backgroundColor="#b13737"
        />
    );
};

export const ChatPromptStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <ChatPrompt
                inputName="chat-dark"
                onSend={mockFunction}
                chatPromptStyle="dark"
            />
            <div className="p-5 bg-black">
                <ChatPrompt
                    inputName="chat-light"
                    onSend={mockFunction}
                    chatPromptStyle="light"
                />
            </div>
        </div>
    );
};
