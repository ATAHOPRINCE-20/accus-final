import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { Services } from '../components/Services';
import { LoanCalculator } from '../components/LoanCalculator';
import { FAQ } from '../components/FAQ';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

import { SEO } from '../components/SEO';

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Services - Accus Capital" 
        description="Explore our range of financial services including Business Loans, Personal Loans, Asset Financing, and Investment Advisory."
        keywords="personal loans, group loans, emergency loans, school fees loans, asset financing, business loans uganda"
        canonical="https://accuscapital.com/services"
      />
      <Header />
      <main>
        <PageHero 
          title="Our Services" 
          subtitle="Comprehensive financial solutions tailored to meet your unique needs."
          backgroundImage="https://res.cloudinary.com/dywusgc6j/image/upload/v1771086592/african-business-male-people-shaking-hands_1_nasx71.jpg"
        />
        <Services />
        <LoanCalculator />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}