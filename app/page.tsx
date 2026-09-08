import { Connect } from "./components/connect";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Now } from "./components/now";
import { Posts } from "./components/posts";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Now />
      <Projects />
      <Posts />
      <Connect />
      <Footer />
    </main>
  );
}
