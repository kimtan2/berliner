import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
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

function getInstagramReelEmbedSrc(url: string): string | null {
  const match = url.match(/\/reel\/([^/]+)/i);
  if (!match?.[1]) return null;
  const shortcode = match[1];
  return `https://www.instagram.com/reel/${shortcode}/embed/`;
}

function InstagramEmbed({ url }: { url: string }) {
  const embedSrc = getInstagramReelEmbedSrc(url);

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <AspectRatio ratio={9 / 16}>
          {embedSrc ? (
            <iframe
              src={embedSrc}
              title="Instagram Reel"
              className="h-full w-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
              Video konnte nicht geladen werden
            </div>
          )}
        </AspectRatio>
      </div>

      <Button asChild variant="outline" size="sm" className="mx-auto">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" />
          Auf Instagram ansehen
        </a>
      </Button>
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [shuffledVideos] = useState(() => shuffleArray(instagramVideos));

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-paper border-b border-ink">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-serif text-7xl text-primary leading-none block mb-6">&ldquo;</span>
          <h2 className="font-serif text-4xl md:text-6xl italic leading-[1.05] text-ink mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-60">
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
