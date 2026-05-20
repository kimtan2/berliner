import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
};

export default About;
