"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
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

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Imagine… You have a branch everywhere!"
      description="We simplify your entire ecommerce selling and delivery operations"
      tag="Logistics Technology"
      buttons={[
        {
          text: "Open Your Branch Now",
          href: "/join",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-working-laptop-workers-warehouse_259150-56902.jpg",
          imageAlt: "Logistics Operations",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/server-room-arrays-processing-neural-network-datasets_482257-124389.jpg",
          imageAlt: "Logistics Fleet",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-overalls-with-hands-belt-looking-up_259150-56912.jpg",
          imageAlt: "Man in overalls with hands on belt looking up",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-warehouse-worker-protective-uniform-checking-goods-distribution-market_342744-1527.jpg",
          imageAlt: "Portrait of warehouse worker",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/black-female-warehouse-worker-inspecting-merchandise-industrial-storage-compartment_637285-4659.jpg",
          imageAlt: "Black female warehouse worker",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Trusted by 500+ Saudi brands"
    />
  </div>

  <div id="features-sales" data-section="features-sales">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Ultra Fast Delivery",
          description: "Delivery within 180 minutes max",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-guys-holding-box_23-2148773422.jpg",
          imageAlt: "Fast Delivery",
        },
        {
          title: "Storage Solutions",
          description: "Dry, chilled, frozen storage",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-robot-futuristic-environment_23-2151189307.jpg",
          imageAlt: "Warehouse Storage",
        },
        {
          title: "Geographical Coverage",
          description: "Distributed branches across Saudi Arabia",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-geometric-wavy-folds-background_1048-16077.jpg",
          imageAlt: "Saudi Distribution",
        },
        {
          title: "Sales Channels",
          description: "Appear in delivery apps as nearest store",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-supply-chain-representation_23-2149827235.jpg",
          imageAlt: "App Integration",
        },
      ]}
      title="How Cloud Shelf Increases Your Sales"
      description="Smart logistics solutions designed for your growth."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Storage",
          description: "Premium warehouse racks",
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-workplace-scheduling-rama-gateway-company_1417-1117.jpg",
          imageAlt: "Storage",
        },
        {
          title: "Inventory Management",
          description: "Smart inventory tracking",
          imageSrc: "http://img.b2bpic.net/free-photo/business-owner-scanning-stock-from-storehouse-shelves-working-with-scanner-inventory-check-logistics-supplies-female-employee-using-tablet-scan-bar-code-merchandise-handheld-shot_482257-62660.jpg",
          imageAlt: "Inventory",
        },
        {
          title: "Fulfillment",
          description: "Order packing and preparation",
          imageSrc: "http://img.b2bpic.net/free-photo/men-warehouse-working_23-2148886839.jpg",
          imageAlt: "Fulfillment",
        },
        {
          title: "Delivery",
          description: "Professional courier fleet",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-girl-carrying-box-customer_23-2147767732.jpg",
          imageAlt: "Delivery",
        },
      ]}
      title="Integrated Logistics Services"
      description="End-to-end management for ecommerce."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="What Our Partners Say"
      description="See how brands are growing with Cloud Shelf."
      testimonials={[
        {
          id: "1",
          name: "Khalid A.",
          role: "Operations Manager",
          company: "KSA Retail",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-warehouse-worker-smiling-looking-front_342744-1533.jpg",
        },
        {
          id: "2",
          name: "Sara M.",
          role: "Founder",
          company: "Moda Online",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-watching-business-conference-computer-screen-looking-statistics_482257-125563.jpg",
        },
        {
          id: "3",
          name: "Ahmed Z.",
          role: "Logistics Lead",
          company: "Tech Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-administrator-uses-green-screen-tablet-explore-new-growth-strategy_482257-126533.jpg",
        },
        {
          id: "4",
          name: "Laila B.",
          role: "Manager",
          company: "Fresh Eats",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/photovoltaics-factory-technician-using-tablet-improve-solar-panels-efficiency_482257-124990.jpg",
        },
      ]}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Tech System Dashboard"
      description="Real-time visibility into your inventory and sales performance."
      features={[
        {
          id: "dash-1",
          title: "Order Analytics",
          subtitle: "Real-time trends",
          category: "Data",
          value: "99.9% uptime",
        },
        {
          id: "dash-2",
          title: "API Integration",
          subtitle: "Seamless connection",
          category: "Tech",
          value: "Secure",
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
