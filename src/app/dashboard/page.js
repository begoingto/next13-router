'use client';
import Link from "next/link";
import { Alert } from "flowbite-react";

export default function Dashboard(){
    return (
        <main className="dashboard">
            <h1>Welcome to Dashboard</h1>
            <Alert color="info">Alert!</Alert>;
        </main>
    )
}