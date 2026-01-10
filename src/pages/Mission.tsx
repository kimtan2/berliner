import { Header } from '@/components/Header';
import { MissionSection } from '@/components/MissionSection';
import { Footer } from '@/components/Footer';

const Mission = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                <MissionSection />
            </main>
            <Footer />
        </div>
    );
};

export default Mission;
