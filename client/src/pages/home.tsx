import Hero from "@/components/ui/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero
        title="A better way to get a mortgage"
        subtitle="Experience a modern, digital mortgage process with competitive rates and exceptional service"
        cta="Get Started"
        ctaLink="/start"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Better</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We've revolutionized the mortgage industry with our innovative digital platform
            and commitment to exceptional service.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Online Process</h3>
                <p className="text-gray-600">
                  Complete your entire mortgage application online, from anywhere, at any time.
                  No more paperwork or branch visits required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lower Rates & Fees</h3>
                <p className="text-gray-600">
                  Save thousands with our competitive mortgage rates and zero lender fees.
                  We pass our tech savings directly to you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Get guidance from our dedicated mortgage experts whenever you need it.
                  We're here to help 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-600 mb-8">
              Take the first step toward your new home with Better Mortgage.
              Check your rate in just a few minutes.
            </p>
            <a href="/start" className="inline-flex items-center justify-center h-10 px-8 font-medium text-white bg-primary rounded-md hover:bg-primary/90">
              Check Your Rate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}