import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { Seo } from '@/components/Seo';

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Seo
                title="Über uns — Berliner Sprachschule"
                description="Lernen Sie die Berliner Sprachschule in Urganch kennen: erfahrene Lehrkräfte, moderne Methodik und persönliche Betreuung für Ihren Deutsch-Erfolg."
                path="/about"
            />
            <Header />
            <main className="pt-24">
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
};

export default About;
