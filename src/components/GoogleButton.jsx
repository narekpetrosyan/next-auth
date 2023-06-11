"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParams = useSearchParams();

  const handleSignIn = () => {
    signIn("google", { callbackUrl: searchParams.get("callbackUrl") || "/" });
  };

  return <button onClick={handleSignIn}>Google sign in</button>;
};

export default GoogleButton;
