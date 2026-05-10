"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
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
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Track Order",
          id: "/track",
        },
        {
          name: "FAQ",
          id: "/faq",
        },
        {
          name: "Contact Us",
          id: "/contact",
        },
      ]}
      brandName="Cloud Shelf"
      button={{
        text: "Join Now",
        href: "/join",
      }}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Mission"
      description="Revolutionizing logistics through innovative technology."
      features={[
        {
          id: "m1",
          title: "Innovation",
          subtitle: "Leading the market",
          category: "Vision",
          value: "Forward-thinking",
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Our Team"
      description="The experts behind the cloud shelf logistics."
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "CEO",
          company: "Cloud Shelf",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/multicultural-team-women-leaders-hold-online-conference-call_482257-123708.jpg",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Cloud Shelf"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "FAQ",
              href: "/faq",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Track Order",
              href: "/track",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
