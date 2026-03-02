import Head from "next/head";
import Services from "@/Components/Services";

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Our Services | Team Patchwork</title>
                <meta name="description" content="High-quality video production services from concept to delivery. Corporate videos, promotional content, social media, events, commercials, and post-production." />
            </Head>
            <Services />
        </>
    );
}

