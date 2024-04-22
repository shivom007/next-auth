"use client";
import Navigation from "@/components/ui/navigation";
import { ToggleProvider, ToggleContext } from "@/context";
import { useContext } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { toggle } = useContext(ToggleContext);
  return (
    <div
      className={`bg-no-repeat min-h-screen overflow-x-hidden hello  overflow-y-hidden  sm:min-h-screen sm:bg-gradient-to-br bg-gradient-to-tr ${
        toggle
          ? "from-slate-300 to-zinc-800"
          : "from-white via-[#E2A4FF] to-[#6777FF]"
      } `}
    >
      <Navigation />
      {children}
    </div>
  );
}
