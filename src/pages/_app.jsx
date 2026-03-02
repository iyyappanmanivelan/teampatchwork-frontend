import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TargetCursor from "@/Animation/TargetCursor";
import Header from "@/Common/Header";
import Loader from "@/Common/Loader";
import Footer from "@/Common/Footer";
import "@/styles/globals.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ... existing useEffect ...
    const handleStart = () => {
      setLoading(true);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 500);
      window.scrollTo(0, 0); // Ensure scroll resets to top
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      {loading && <Loader />}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
