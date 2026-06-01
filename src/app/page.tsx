"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, DollarSign, Sparkles, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Our Work",          id: "#our-work"},
        {
          name: "Results",          id: "#results"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="FluxPlix Digital"
      button={{
        text: "Book a Free Consultation",        href: "#contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "sparkles-gradient"}}
      logoText="FluxPlix Digital"
      description="We help businesses establish a professional online presence with modern websites designed to generate leads, build trust, and grow revenue. Your 24/7 sales team starts here."
      buttons={[
        {
          text: "Book a Free Consultation",          href: "#contact"},
        {
          text: "View Our Work",          href: "#our-work"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-flowing-background-shades-blue-red_1048-5875.jpg"
      imageAlt="Abstract digital landscape representing web design and innovation"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Your Trusted Partner in "},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/person-working-html-computer_23-2150038855.jpg",          alt: "Web Design Workflow"},
        {
          type: "text",          content: " Digital Growth"},
      ]}
      buttons={[
        {
          text: "Learn More About Us",          href: "#"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Outdated Aesthetics",          "Slow Performance",          "Poor Mobile Experience"],
      }}
      positiveCard={{
        items: [
          "Stunning Design",          "Blazing Fast Speed",          "Seamless Mobile Responsiveness"],
      }}
      title="Modern Web Solutions for Your Business"
      description="We transform outdated online presences into powerful lead-generating assets. See how our approach addresses common pain points and delivers measurable results."
      tag="Our Expertise"
      tagIcon={Sparkles}
      tagAnimation="opacity"
    />
  </div>

  <div id="our-work" data-section="our-work">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      animationType="slide-up"
      products={[
        {
          id: "project-1",          name: "Plumbing Masters",          price: "Lead Generation Focus",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-wearing-helmet-indoors_23-2148920599.jpg",          imageAlt: "Website mockup for Plumbing Masters"},
        {
          id: "project-2",          name: "Spark Electricians",          price: "Brand Credibility Build",          imageSrc: "http://img.b2bpic.net/free-photo/builder-uniform-digital-tablet-wooden-background-flat-lay_169016-24014.jpg",          imageAlt: "Website mockup for Spark Electricians"},
        {
          id: "project-3",          name: "Gourmet Catering",          price: "Enhanced Online Presence",          imageSrc: "http://img.b2bpic.net/free-photo/hands-cutting-vegetables-close-up_23-2148939236.jpg",          imageAlt: "Website mockup for Gourmet Catering"},
        {
          id: "project-4",          name: "Peak Fitness Studio",          price: "Member Acquisition",          imageSrc: "http://img.b2bpic.net/free-photo/wellbeing-fitness-healthy-lifestyle-icon_53876-21367.jpg",          imageAlt: "Website mockup for Peak Fitness Studio"},
        {
          id: "project-5",          name: "Lens & Light Photography",          price: "Visual Portfolio Showcase",          imageSrc: "http://img.b2bpic.net/free-photo/coworking-photographers-with-gadget-desk_1098-21640.jpg",          imageAlt: "Website mockup for Lens & Light Photography"},
        {
          id: "project-6",          name: "Elite Realty Group",          price: "Property Listing & Leads",          imageSrc: "http://img.b2bpic.net/free-photo/3d-smartphone-device-with-map-gps-technology_23-2150458978.jpg",          imageAlt: "Website mockup for Elite Realty Group"},
      ]}
      title="Our Portfolio of Success Stories"
      description="Explore recent web design projects that have helped small businesses and local service providers thrive online. See the FluxPlix Digital difference."
    />
  </div>

  <div id="results" data-section="results">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",          icon: TrendingUp,
          title: "Increase in Leads",          value: "30%+"},
        {
          id: "metric-2",          icon: DollarSign,
          title: "Average ROI",          value: "200%+"},
        {
          id: "metric-3",          icon: Award,
          title: "Enhanced Brand Credibility",          value: "5-Star"},
      ]}
      title="Achieve Tangible Results with FluxPlix Digital"
      description="Our focus is on delivering measurable success for your business. See the impact a professionally designed website can have on your bottom line."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          handle: "@TechBizSolutions",          testimonial: "FluxPlix Digital delivered an incredible website that immediately started generating leads. Their process was seamless, and the results speak for themselves!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "2",          name: "Michael Chen",          handle: "@ProPlumberNYC",          testimonial: "Our old website was a nightmare. FluxPlix brought us into the modern age with a stunning site that truly showcases our professionalism. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/freight-parcel-inspiration-uniform-art_1134-1177.jpg",          imageAlt: "Michael Chen"},
        {
          id: "3",          name: "Emily Rodriguez",          handle: "@GourmetEvents",          testimonial: "The team at FluxPlix understood our vision perfectly. Our new catering website is beautiful, easy to navigate, and has significantly boosted our bookings.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-brunette-male-portrait_158595-7921.jpg",          imageAlt: "Emily Rodriguez"},
        {
          id: "4",          name: "David Kim",          handle: "@FitFusionTrainer",          testimonial: "As a fitness trainer, my online presence is crucial. FluxPlix built a site that's not just visually appealing but also a powerful tool for client engagement and sign-ups.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-sporty-man-wearing-headband-wristband-crossing-hands-isolated-green-background_141793-72527.jpg",          imageAlt: "David Kim"},
        {
          id: "5",          name: "Jessica Lee",          handle: "@EliteHomesRealty",          testimonial: "FluxPlix designed a sophisticated website for my real estate business. It's clean, professional, and has greatly improved how I connect with potential clients.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-cheerful-stylish-businesswoman-with-laptop-happily-looking-camera-city-street_574295-2595.jpg",          imageAlt: "Jessica Lee"},
      ]}
      showRating={true}
      title="What Our Clients Say"
      description="Hear directly from small business owners and entrepreneurs who have transformed their online presence and grown their business with FluxPlix Digital."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "What does a typical web design project cost?",          content: "Our pricing is transparent and tailored to your specific needs. We offer various packages and custom solutions to fit different budgets and project scopes. Book a free consultation for a personalized quote."},
        {
          id: "faq-2",          title: "How long does it take to build a new website?",          content: "Project timelines vary based on complexity, but we prioritize efficiency without compromising quality. Simple sites can be launched in a few weeks, while more complex platforms may take longer. We'll provide a clear timeline during consultation."},
        {
          id: "faq-3",          title: "Can you redesign my existing website?",          content: "Absolutely! We specialize in transforming outdated websites into modern, conversion-focused platforms. We'll assess your current site, identify areas for improvement, and propose a fresh, effective design."},
        {
          id: "faq-4",          title: "Do you offer ongoing website maintenance?",          content: "Yes, we provide flexible maintenance plans to ensure your website remains secure, up-to-date, and performing optimally. From security updates to content changes, we've got you covered."},
        {
          id: "faq-5",          title: "What kind of support can I expect after launch?",          content: "We believe in long-term partnerships. After your website launches, we provide training on managing your new site, offer technical support, and are always available for future updates or expansions."},
      ]}
      title="Frequently Asked Questions"
      description="Have questions about our web design process, pricing, or what to expect? Find answers to common inquiries from our clients here."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Transform Your Online Presence?"
      description="Book a free, no-obligation consultation with our experts. Let's discuss your vision and how FluxPlix Digital can help you achieve your business goals."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number (Optional)"},
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your project and goals...",        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/laptop-blue-background-copy-space_169016-36119.jpg"
      imageAlt="Digital connections and communication network"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Book Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Our Work",              href: "#our-work"},
          ],
        },
        {
          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Client Results",              href: "#results"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      logoText="FluxPlix Digital"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
