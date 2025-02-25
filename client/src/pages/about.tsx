import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Better</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We're making homeownership simpler, faster, and more accessible for all Americans.
            </p>
            <p className="text-gray-600">
              By combining innovative technology with expertise, we're revolutionizing the mortgage industry.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt="Team Member"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                  alt="Team Member"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                <p className="text-gray-600">Head of Technology</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="Team Member"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Emily Rodriguez</h3>
                <p className="text-gray-600">Lead Mortgage Expert</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
