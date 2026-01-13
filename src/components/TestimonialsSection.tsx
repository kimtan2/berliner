import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

// Instagram video URLs
const instagramVideos = [
  "https://www.instagram.com/reel/DSKzWj7DGgr/",
  "https://www.instagram.com/reel/DQVk6idiFOC/",
  "https://www.instagram.com/reel/DPu6sbviEof/",
  "https://www.instagram.com/reel/DHYBtblsUQn/",
  "https://www.instagram.com/reel/C8mqHRdIoa9/",
  "https://www.instagram.com/reel/Cy-86XZsMZ_/",
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, process embeds
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, [url]);

  const handleOpenInstagram = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={containerRef} className="instagram-embed-container flex flex-col gap-3">
      <div className="relative group">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          data-instgrm-captioned=""
          style={{
            background: 'hsl(var(--card))',
            border: 0,
            borderRadius: '12px',
            margin: '0 auto',
            maxWidth: '540px',
            minWidth: '280px',
            width: '100%',
          }}
        />
        {/* Clickable overlay for opening in new tab */}
        <div 
          onClick={handleOpenInstagram}
          className="absolute inset-0 cursor-pointer z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20 backdrop-blur-[1px] rounded-xl"
        >
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg">
            <ExternalLink className="h-4 w-4" />
            Auf Instagram öffnen
          </div>
        </div>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleOpenInstagram}
        className="mx-auto"
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Auf Instagram ansehen
      </Button>
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [shuffledVideos] = useState(() => shuffleArray(instagramVideos));

  useEffect(() => {
    // Process Instagram embeds when component mounts
    const timer = setTimeout(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {shuffledVideos.map((url, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <InstagramEmbed url={url} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
