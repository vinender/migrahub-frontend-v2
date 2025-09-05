"use client";

import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import DestinationCountries from "@/components/landing/DestinationCountries";
import Features from "@/components/landing/Features";
import ImmigrationStats from "@/components/landing/ImmigrationStats";
import ProcessTimeline from "@/components/landing/ProcessTimeline";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <DestinationCountries />
        <Features />
        <ImmigrationStats />
        <ProcessTimeline />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}