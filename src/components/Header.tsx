'use client'
import HeaderLink from "./HeaderLink";
import { delay } from "@/lib/delay";

export default async function Header() {
    await delay(5000)
    return (
        <>
            Header Client Component
            <HeaderLink />
        </>
    );
};