import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Technology stack and tools" />
        <ProjectsSection sectionId="projects" heading="My pet projects 🐾" />
        <ContactSection sectionId="github" heading="Do you like this site?" />
      </Page>
    </>
  );
}
