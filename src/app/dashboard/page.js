'use client';
import Link from "next/link";
import { Alert } from "flowbite-react";

const session = 1


export default function Dashboard(){

    if (!session){
        throw new Error("You must be login account")
    }

    return (
        <main className="dashboard">
            <h1>Welcome to Dashboard</h1>
            <Alert color="info">Alert!</Alert>;
        </main>
    )
}