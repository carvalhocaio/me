import { Hero } from "./components/hero";
import { Journey } from "./components/journey";
import { NextSection } from "./components/next-section";
import { Now } from "./components/now";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Journey />
      <Now />
      <Projects />
      <NextSection />
    </main>
  );
}
