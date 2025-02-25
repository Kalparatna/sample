import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: string;
  ctaLink?: string;
  image: string;
}

export default function Hero({ title, subtitle, cta, ctaLink, image }: HeroProps) {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          {cta && ctaLink && (
            <Link href={ctaLink}>
              <Button size="lg">{cta}</Button>
            </Link>
          )}
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
