"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

type Props = {};

function PreviewPdf({}: Props) {
  return (
    <Document>
      <Page>
        <Text>Hello, React-PDF!</Text>
      </Page>
    </Document>
  );
}

export default PreviewPdf;
