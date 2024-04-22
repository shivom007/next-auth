'use client'
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const handleSignout = () =>{
    signOut({callbackUrl : '/login'})
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleSignout}>signOut</button>
    </main>
  );
}
