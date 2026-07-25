import { Hero } from "./components/hero";
import { Journey } from "./components/journey";
import { Now } from "./components/now";
import { Posts } from "./components/posts";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Journey />
      <Now />
      <Projects />
      <Posts />
    </main>
  );
}
