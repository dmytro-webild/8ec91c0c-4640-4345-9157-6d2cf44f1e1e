"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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
      title="Track Your Shipment"
      description="Enter your tracking number for real-time updates."
      features={[
        {
          id: "tr1",
          title: "Express Tracking",
          subtitle: "Updated every 5 min",
          category: "Status",
          value: "Live",
        },
      ]}
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Tracking FAQ"
      description="Common questions about delivery status."
      blogs={[
        {
          id: "b1",
          category: "Delivery",
          title: "Where is my package?",
          excerpt: "Check your status here...",
          imageSrc: "http://img.b2bpic.net/free-photo/young-delivery-man-holding-packages-while-communicating-mobile-phone-standing-street_637285-1278.jpg",
          authorName: "Logistics Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-smiling-warehouse-worker-smiling-looking-front_342744-1533.jpg",
          date: "2024-10-01",
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
