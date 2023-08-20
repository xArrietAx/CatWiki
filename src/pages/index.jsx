import { Discover } from "@/components/Home/Discover";
import { Hero } from "@/components/Home/Hero";
import { Why } from "@/components/Home/Why";
import { Container } from "@/components/Layout/Container";

export default function Home() {
  return <Container>
    <main>
      <Hero />
      <Discover />
      <Why />
    </main>
  </Container>
}