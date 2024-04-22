import Button from "@/components/ui/signout";
import { auth } from "@/auth";
import { redirect } from 'next/navigation'
export default async function Home() {
  const session = await auth();
  if (!session) return redirect('/login')
  const { user } = session;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p>Welcome!{user?.name} </p>
      <Button />
    </main>
  );
}
