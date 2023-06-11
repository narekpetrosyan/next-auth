"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SigninForm;
