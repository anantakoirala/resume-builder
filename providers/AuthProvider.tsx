"use client";
import { useGetUserQuery } from "@/redux/user/userApi";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const { data, isLoading, error } = useGetUserQuery({});

  useEffect(() => {
    if (error && "status" in error && error.status === 401) {
      router.push("/auth/login");
    }
  }, [error, router]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return <div>{children}</div>;
};

export default AuthProvider;
