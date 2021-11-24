import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import HeaderSimple from './HeaderSimple'
import Footer from './Footer'
import FooterSimple from './FooterSimple'

type Props = {
    children?: ReactNode,
    title?: string
}

const Layout = ({ children, title = "Default title" }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <HeaderSimple />
        {children}
        <FooterSimple />
    </>
)

export default Layout