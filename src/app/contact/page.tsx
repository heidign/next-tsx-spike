'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <>
      <h1 className="text-5xl">Contact</h1>
      <Link href="/">Home</Link>
      <button onClick= {() => router.push("/")}></button>
    </>
  );
};
