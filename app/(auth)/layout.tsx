"use client";
import Navigation from "@/components/ui/navigation";
import { useToggle} from "@/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { toggle } = useToggle()
  const router = useRouter()
  const {data: session, status} = useSession();
  if(status === 'authenticated'){
    return router.push('/')
  }
  
  return (
    <main
      className={`bg-no-repeat min-h-screen overflow-x-hidden hello  overflow-y-hidden  sm:min-h-screen sm:bg-gradient-to-br bg-gradient-to-tr ${
        toggle
          ? "from-slate-300 to-zinc-800"
          : "from-white via-[#E2A4FF] to-[#6777FF]"
      } `}
    >
      <Navigation />
      {children}
    </main>
  );
}
