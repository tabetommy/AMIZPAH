import Image from "next/image";
import { siteConfig } from "@/config/navigation";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center lg:min-h-[600px]">
      <Image
        src="/images/hero.jpg"
        alt="Entrepreneurs at a vibrant outdoor market"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Empowering Ambition through Financial Inclusion
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-200 sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={siteConfig.applyHref}>Apply Now</Button>
            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
