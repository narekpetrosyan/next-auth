import { authConfig } from "@/config/auth-config";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <main>
      <h1>Profile of {session?.user?.name}</h1>
    </main>
  );
}
