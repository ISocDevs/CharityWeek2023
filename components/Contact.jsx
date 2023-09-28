"use client";
import React from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        purpose: ["General"],
        heads: ["Safiyya Musa ", "Zain Ahmad"],
        email: ["contact@imperialcharityweek.co.uk"],
    },
    {
        key: "2",
        purpose: ["Auction Dinner"],
        heads: ["Esha Kamran", "Yusuf Maduddi"],
        email: ["dinner@imperialcharityweek.co.uk"],
    },
    {
        key: "3",
        purpose: ["Sponsorship"],
        heads: ["Umar Mahmood", "Rayan Kamal"],
        email: ["sponsorship@imperialcharityweek.co.uk"],
    }
];

const columns = [
    {
        key: "purpose",
        label: "Purpose",
    },
    {
        key: "heads",
        label: "Heads",
    },
    {
        key: "email",
        label: "Email",
    },
];

export default function Contact() {
    return (
        <div >
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
    );
}
