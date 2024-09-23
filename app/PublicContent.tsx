import { Features } from "@/components/landingPage/Feature";
import { Footer } from "@/components/landingPage/Footer";
import { Herotop } from "@/components/landingPage/Herotop";
import { Navbar } from "@/components/landingPage/Navbar";

export default function PublicContent() {
  return (
    <main className="">
      <Navbar />
      <Herotop />
      <Features />
      <Footer />
    </main>
  );
}
