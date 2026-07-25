import { Hero } from "./components/hero";
import { Journey } from "./components/journey";
import { Now } from "./components/now";

export default function Home() {
  return (
    <main>
      <Hero />
      <Journey />
      <Now />
    </main>
  );
}
