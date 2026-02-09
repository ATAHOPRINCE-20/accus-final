import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { WhoWeAre } from '../components/WhoWeAre';
import { OurFuture } from '../components/OurFuture';
import { TeamSection } from '../components/TeamSection';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="About Us" 
          subtitle={`Building financial futures for Ugandan families and businesses since ${new Date().getFullYear() - (new Date().getFullYear() - 2020)}`}
          backgroundImage="https://res.cloudinary.com/dywusgc6j/image/upload/v1770643263/PHOTO-2026-02-09-15-23-34_nlbrct.jpg"
        />
        <WhoWeAre />
        <OurFuture />
        <TeamSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}