import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { Features } from "./_components/features";

const MarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default MarketingPage;
