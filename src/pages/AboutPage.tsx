import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { WhoWeAre } from '../components/WhoWeAre';
import { OurFuture } from '../components/OurFuture';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TeamSection } from '../components/TeamSection';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

import { SEO } from '../components/SEO';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - Accus Capital" 
        description="Learn about Accus Capital, our mission to empower Ugandans, and the dedicated team driving financial growth and integrity."
        keywords="finance company uganda, trusted lender, financial services, accus capital mission, accus capital team"
        canonical="https://accuscapital.com/about"
      />
      <Header />
      <main>
        <PageHero 
          title="About Us" 
          subtitle={
            <>
              <span className="font-extrabold text-[#00A99D] text-3xl">TrustedFinance.</span> Building financial futures for Ugandan families and businesses since {new Date().getFullYear() - (new Date().getFullYear() - 2020)}
            </>
          }
          backgroundImage="https://res.cloudinary.com/dywusgc6j/image/upload/v1770643263/PHOTO-2026-02-09-15-23-34_nlbrct.jpg"
        />
        <WhoWeAre />
        <OurFuture />
        <WhyChooseUs />
        <TeamSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}