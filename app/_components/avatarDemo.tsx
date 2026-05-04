"use client";

import { Avatar } from "../../lib/pixelartui";

export const AvatarWithInitials = () => {
    return <Avatar initials="AB" />;
};

export const AvatarSizes = () => {
    return (
        <div className="flex items-end gap-10">
            <Avatar initials="SM" size="small" />
            <Avatar initials="MD" size="medium" />
            <Avatar initials="LG" size="large" />
        </div>
    );
};

export const AvatarDefault = () => {
    return <Avatar alt="User avatar" />;
};

export const AvatarCustomBackground = () => {
    return <Avatar initials="AB" backgroundColor="#05EB57" />;
};

export const AvatarStyles = () => {
    return (
        <div className="flex items-end gap-10">
            <Avatar initials="DK" avatarStyle="dark" />
            <div className="p-5 bg-black">
                <Avatar initials="LT" avatarStyle="light" />
            </div>
        </div>
    );
};
