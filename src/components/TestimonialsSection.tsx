import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: {
    de: string;
    ru: string;
    uz: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "G'anisher Mamadaliyev",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: {
      de: "Ich habe das internationale Goethe B1-Zertifikat in 7 Monaten erhalten und bin den Lehrern des Berliner Zentrums sehr dankbar für ihre Unterstützung.",
      ru: "Я получил международный сертификат Гёте B1 за 7 месяцев и благодарен преподавателям Берлинского центра за их поддержку.",
      uz: "Men 7 oy ichida xalqaro Goethe B1 sertifikatini oldim va Berliner markazining o'qituvchilariga yordam uchun minnatdorman."
    },
    rating: 5
  },
  {
    id: 2,
    name: "Muhammadsodiq Abdullayev",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: {
      de: "Ich habe die Ausbildung im Berlin Zentrum absolviert und erfolgreich die Prüfungen bestanden. Jetzt mache ich eine Ausbildung in Deutschland.",
      ru: "Прошел обучение в Berlin Zentrum и успешно сдал экзамены. Сейчас прохожу Ausbildung в компании Papenburg в Германии.",
      uz: "Berlin Zentrumda o'qishni tugatdim va imtihonlardan muvaffaqiyatli o'tdim. Hozir Germaniyada Ausbildung o'tayapman."
    },
    rating: 5
  },
  {
    id: 3,
    name: "Oyatillo Sotvoldiyev",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: {
      de: "Wir haben im Berliner Zentrum gelernt und gute Prüfungsergebnisse erzielt. Wir möchten uns bei allen Lehrern für ihre Unterstützung bedanken.",
      ru: "Мы учились в Берлинском центре и добились хороших результатов на экзаменах. Мы хотели бы поблагодарить всех учителей за поддержку.",
      uz: "Biz Berliner markazida o'qidik va imtihonlarda yaxshi natijalar ega bo'ldik. Barcha o'qituvchilarga yordam uchun minnatdorchilik bildirmoqchimiz."
    },
    rating: 5
  },
  {
    id: 4,
    name: "Dilnoza Karimova",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: {
      de: "Die beste Sprachschule in Urgench! Die Lehrer sind sehr geduldig und professionell. Ich habe in kurzer Zeit große Fortschritte gemacht.",
      ru: "Лучшая языковая школа в Ургенче! Преподаватели очень терпеливые и профессиональные. Я добилась больших успехов за короткое время.",
      uz: "Urganchdagi eng yaxshi til maktabi! O'qituvchilar juda sabr-toqatli va professional. Qisqa vaqt ichida katta yutuqlarga erishdim."
    },
    rating: 5
  },
  {
    id: 5,
    name: "Sardor Rahimov",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    text: {
      de: "Dank Sprachschule Berliner habe ich mein B2-Zertifikat bekommen und arbeite jetzt in Deutschland. Sehr empfehlenswert!",
      ru: "Благодаря Sprachschule Berliner я получил сертификат B2 и теперь работаю в Германии. Очень рекомендую!",
      uz: "Sprachschule Berliner tufayli B2 sertifikatini oldim va hozir Germaniyada ishlayman. Juda tavsiya qilaman!"
    },
    rating: 5
  }
];

export function TestimonialsSection() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
          {getVisibleTestimonials().map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.text[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
