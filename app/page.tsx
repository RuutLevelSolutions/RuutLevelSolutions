import { AboutSection } from "@/components/sections/about-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProductsVisionSection } from "@/components/sections/products-vision-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />
      <SiteHeader />
      <main>
        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <PortfolioSection />
        <ProductsVisionSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
