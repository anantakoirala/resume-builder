"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Modal from "./components/Modal";
import ModalProvider from "@/providers/ModalProvider";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://unpkg.com/@phosphor-icons/web"></Script>
      </head>
      <body>
        <Provider store={store}>
          <ModalProvider>{children}</ModalProvider>
        </Provider>
      </body>
    </html>
  );
}
