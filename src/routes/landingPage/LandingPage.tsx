// components
import { Hero } from '../landingPage/hero/Hero';
import { AboutMe } from './aboutMe/AboutMe';
import { TechStack } from './techStack/TechStack';
import { Statistics } from './statistics/Statistics';
import { Projects } from './projects/Projects';
import { BlogLatest } from './blogLatest/BlogLatest';
import { ContactMe } from './contactMe/ContactMe';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechStack />
      <Statistics />
      <Projects />
      <BlogLatest />
      <ContactMe />
    </>
  );
};
