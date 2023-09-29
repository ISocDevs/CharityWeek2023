"use client";
import React from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        purpose: ["General"],
        heads: ["Safiyya Musa ", "Zain Ahmad"],
        email: [<a class="email"
            href="mailto:contact@imperialcharityweek.co.uk?subject=Charity Week">contact@imperialcharityweek.co.uk</a>],
    },
    {
        key: "2",
        purpose: ["Auction Dinner"],
        heads: ["Esha Kamran", "Yusuf Maduddi"],
        email: [<a class="email"
            href="mailto:dinner@imperialcharityweek.co.uk?subject=Dinner">dinner@imperialcharityweek.co.uk</a>],
    },
    {
        key: "3",
        purpose: ["Sponsorship"],
        heads: ["Umar Mahmood", "Rayan Kamal"],
        email: [<a class="email"
            href="mailto:sponsorship@imperialcharityweek.co.uk?subject=Sponsorship">sponsorship@imperialcharityweek.co.uk</a>],
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

const columns_sm = [
    {
        key: "email",
        label: "Emails"
    }
]

export default function Contact() {
    return (
        <div>
            <div className="max-sm:hidden">
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
            <div className="sm:hidden">
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
            </div>
        </div>
    );
}
