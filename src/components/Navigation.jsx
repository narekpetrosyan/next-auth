"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navigation = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
      {session.data && <Link href="/profile">Profile</Link>}

      {session.data ? (
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default Navigation;
