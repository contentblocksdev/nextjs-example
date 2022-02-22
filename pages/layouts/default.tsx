// import Navbar from './navbar'

import { ReactNode } from "react";
import { ContentButton, ContentNavigationBlock } from "@content-blocks/react";
import Head from "next/head";
// import Footer from './footer'
type Props = {
  children: ReactNode;
  title?: string;
};

export default function DefaultLayout({ children }: Props) {
  return (
      <>
        <main>{children}</main>
      </>

  )
}