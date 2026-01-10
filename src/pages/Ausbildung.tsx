import { Header } from '@/components/Header';
import { AusbildungSection } from '@/components/AusbildungSection';
import { Footer } from '@/components/Footer';

const Ausbildung = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                <AusbildungSection />
            </main>
            <Footer />
        </div>
    );
};

export default Ausbildung;
