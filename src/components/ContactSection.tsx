import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: "Hamid Olimjon ko'chasi 2b uy, Urgench",
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+998 99 132 55 21',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'info@sprachschule-berliner.uz',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <Mail className="h-3 w-3 mr-1" />
            {t('nav.contact')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-2">{info.label}</div>
                <div className="text-lg font-semibold text-foreground">{info.value}</div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="h-[450px] rounded-2xl bg-muted/30 border border-border/50 overflow-hidden shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24758.98647307247!2d60.61!3d41.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41df19ef35e7f4d5%3A0x7e8b7e6e0e8b7e6e!2sUrganch%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1704380000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
