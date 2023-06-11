"use client";
import { SessionProvider, useSession } from "next-auth/react";

const Providers = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
