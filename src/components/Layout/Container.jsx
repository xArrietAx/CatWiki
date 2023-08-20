import Head from "next/head";
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Container = ({ children }) => {
    return (
        <>
        <Head>
            <title>CatWiki</title>
        </Head>
        <div className="flex flex-col justify-between w-full max-w-5xl h-screen px-4 mx-auto md:w-11/12">
            <Header />
            {children}
            <Footer />
        </div>
        </>
    )
}
