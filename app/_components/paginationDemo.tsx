"use client";

import { Pagination, mockFunction } from "../../lib/pixelartui";

export const PaginationDefault = () => {
    return <Pagination totalPages={10} onChange={mockFunction} />;
};

export const PaginationFewPages = () => {
    return <Pagination totalPages={3} onChange={mockFunction} />;
};

export const PaginationWithDefaultPage = () => {
    return (
        <Pagination totalPages={10} defaultPage={5} onChange={mockFunction} />
    );
};

export const PaginationManyPages = () => {
    return (
        <Pagination totalPages={50} defaultPage={25} onChange={mockFunction} />
    );
};

export const PaginationCustomBackground = () => {
    return (
        <Pagination
            totalPages={10}
            backgroundColor="#05EB57"
            onChange={mockFunction}
        />
    );
};

export const PaginationStyles = () => {
    return (
        <div className="flex flex-col gap-10">
            <Pagination
                totalPages={10}
                paginationStyle="dark"
                onChange={mockFunction}
            />
            <div className="p-5 bg-black">
                <Pagination
                    totalPages={10}
                    paginationStyle="light"
                    onChange={mockFunction}
                />
            </div>
        </div>
    );
};
