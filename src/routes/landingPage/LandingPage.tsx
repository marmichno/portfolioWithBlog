// components
import { Hero } from '../landingPage/hero/Hero';
import { AboutMe } from './aboutMe/AboutMe';
import { TechStack } from './techStack/TechStack';
import { Statistics } from './statistics/Statistics';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechStack />
      <Statistics />
      <AboutMe />
    </>
  );
};
