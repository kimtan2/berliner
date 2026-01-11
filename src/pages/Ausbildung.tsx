import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, GraduationCap, Briefcase, FileText, Plane } from 'lucide-react';

const Ausbildung = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: GraduationCap,
            title: t('ausbildung.process.step1.title'),
            desc: t('ausbildung.process.step1.desc'),
        },
        {
            icon: Briefcase,
            title: t('ausbildung.process.step2.title'),
            desc: t('ausbildung.process.step2.desc'),
        },
        {
            icon: FileText,
            title: t('ausbildung.process.step3.title'),
            desc: t('ausbildung.process.step3.desc'),
        },
        {
            icon: Plane,
            title: t('ausbildung.process.step4.title'),
            desc: t('ausbildung.process.step4.desc'),
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/30 py-1 px-4">
                            {t('nav.ausbildung')}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            {t('ausbildung.title')}
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            {t('ausbildung.subtitle')}
                        </p>
                    </div>

                    {/* Process Timeline */}
                    <div className="mb-32">
                        <h2 className="text-3xl font-bold text-center mb-16">{t('ausbildung.process.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                            {/* Connection Line (Desktop) */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

                            {steps.map((step, index) => (
                                <div key={index} className="relative z-10 bg-background p-8 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm group">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <step.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                    {index < steps.length - 1 && (
                                        <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-border h-6 w-6" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Help & Support Section */}
                    <div className="bg-primary/5 rounded-[40px] p-8 md:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    {t('ausbildung.help.title')}
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {t('ausbildung.help.desc')}
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Beglaubigung von Dokumenten',
                                        'Unterstützung bei der Visumsbeantragung',
                                        'Vorbereitung auf Vorstellungsgespräche',
                                        'Hilfe bei der Wohnungssuche in Deutschland',
                                        'Interkulturelles Training'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
                                        alt="Consultation"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-border">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">100% Support</div>
                                            <div className="text-sm text-muted-foreground">Von A bis Z</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Ausbildung;
