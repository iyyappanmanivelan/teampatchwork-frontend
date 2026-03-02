import Head from "next/head";
import OurWork from "@/Components/OurWork";

export default function OurWorkPage() {
    return (
        <>
            <Head>
                <title>Our Work | Team Patchwork</title>
                <meta name="description" content="Explore our portfolio of corporate videos, commercials, and creative projects." />
            </Head>
            <OurWork />
        </>
    );
}
