"use client";
import React from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        type: ["Email"],
        link: [<a className="email"
            href="mailto:imperialcharityweek2023@gmail.com?subject=Charity Week">imperialcharityweek2023@gmail.com</a>],
    },
    {
        key: "2",
        type: ["Instagram"],
        link: [<a className="email"
            href="https://www.instagram.com/imperialcollegecw/">@imperialcollegecw</a>],
    },
];

const columns = [
    {
        key: "type",
        label: "Type",
    },
    {
        key: "link",
        label: "Link",
    },
];

// const columns_sm = [
//     {
//         key: "email",
//         label: "Emails"
//     }
// ]

export default function Contact() {
    return (
        <div>
            <div className="">
                <Table aria-label="Example table with dynamic content" >
                    <TableHeader columns={columns} >
                        {(column) => <TableColumn key={column.key} className="text-lg">{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell className="text-lg">{getKeyValue(item, columnKey).map(el => (<div>{el}</div>))}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* <div className="sm:hidden">
                <Table aria-label="Example table with dynamic content" >
                    <TableHeader columns={columns_sm} >
                        {(column) => <TableColumn key={column.key} className="text-lg text-center">{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell className="text-lg text-center">{getKeyValue(item, columnKey).map(el => (<div>{el}</div>))}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div> */}
        </div>
    );
}
