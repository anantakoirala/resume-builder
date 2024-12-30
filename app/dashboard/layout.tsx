"use client";
import ModalProvider from "@/providers/ModalProvider";
import Script from "next/script";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "../globals.css";
import AuthProvider from "@/providers/AuthProvider";

type Props = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <ModalProvider>{children}</ModalProvider>
        </AuthProvider>
      </Provider>
    </>
  );
}
