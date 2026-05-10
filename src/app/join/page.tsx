"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import LegalSection from '@/components/legal/LegalSection';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function JoinPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="medium"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "/" },
        { name: "About Us", id: "/about" },
        { name: "Services", id: "/services" },
        { name: "Track Order", id: "/track" },
        { name: "FAQ", id: "/faq" },
        { name: "Contact Us", id: "/contact" }
      ]}
      brandName="Cloud Shelf"
      button={{ text: "Join Now", href: "/join" }}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Join Us?"
      description="Scale your brand with ease."
      features={[{ id: "j1", title: "Easy Signup", subtitle: "Under 5 minutes", category: "Join", value: "Ready to scale" }]}
    />
  </div>

  <div id="legal" data-section="legal">
      <LegalSection
      layout="page"
      title="Onboarding Process"
      sections={[
        { heading: "How to join", content: [{ type: "paragraph", text: "Sign up online" }, { type: "paragraph", text: "Choose plan" }, { type: "paragraph", text: "Start shipping" }] }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Cloud Shelf"
      columns={[
        { title: "Company", items: [{ label: "About", href: "/about" }, { label: "FAQ", href: "/faq" }] },
        { title: "Support", items: [{ label: "Track Order", href: "/track" }, { label: "Contact", href: "/contact" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}