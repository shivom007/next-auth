"use client";
import { signOut } from "next-auth/react";


export default function Button() {
  const handleSignout = () => {
    signOut({ callbackUrl: "/login" });
  };
  return <button className="border-red-600  border-2 p-2 rounded-xl " onClick={handleSignout}>signOut</button>;
}
