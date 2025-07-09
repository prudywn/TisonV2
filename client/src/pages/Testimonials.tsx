import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-consultancy-secondary mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear directly from the leaders and organizations 
              who've experienced transformational results through our strategic consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded mb-6"></div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                      <div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-20"></div>
                        <div className="h-3 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-12 text-center">
              <Quote className="h-16 w-16 text-consultancy-primary mx-auto mb-8" />
              <blockquote className="text-2xl lg:text-3xl font-medium text-consultancy-secondary leading-relaxed mb-8">
                "ConsultancyPro didn't just provide recommendations – they became true partners 
                in our transformation journey. Their hands-on approach and deep industry expertise 
                helped us achieve results we never thought possible. The ROI has been exceptional, 
                and the cultural transformation they facilitated has positioned us for sustained success."
              </blockquote>
              <div className="flex text-consultancy-accent justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                  alt="Michael Chen, CEO"
                  className="w-16 h-16 rounded-full mr-6 object-cover"
                />
                <div className="text-left">
                  <div className="font-bold text-xl text-consultancy-secondary">Michael Chen</div>
                  <div className="text-gray-600">CEO, TechFlow Solutions</div>
                  <div className="text-sm text-gray-500">Fortune 500 Technology Company</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with organizations across industries, from innovative 
              startups to Fortune 500 companies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
            {[
              "TechFlow Solutions",
              "Innovation Industries", 
              "GrowthScale Ventures",
              "Global Manufacturing Co",
              "Digital Dynamics",
              "Strategic Solutions Inc",
              "Future Forward Corp",
              "Excellence Enterprises",
              "Transform Tech",
              "NextGen Systems",
              "Optimal Operations",
              "Vision Ventures"
            ].map((company, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardContent className="p-4 text-center">
                  <div className="text-gray-400 font-semibold text-sm">
                    {company}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Stats */}
      <section className="py-20 bg-consultancy-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Client Satisfaction Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in consistently high satisfaction 
              scores and long-term client relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                98%
              </div>
              <div className="text-gray-300">Overall Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                95%
              </div>
              <div className="text-gray-300">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                4.9/5
              </div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                85%
              </div>
              <div className="text-gray-300">Repeat Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              More Success Stories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex text-consultancy-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6">
                  "The strategic insights and implementation support provided by ConsultancyPro 
                  were instrumental in our successful market expansion. Their team's expertise 
                  in digital transformation helped us modernize our operations and capture new 
                  growth opportunities."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-consultancy-secondary">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">COO, Innovation Industries</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex text-consultancy-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6">
                  "Working with ConsultancyPro was a game-changer for our organization. Their 
                  data-driven approach and practical solutions helped us optimize our operations 
                  and achieve cost savings that exceeded our expectations. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                    alt="David Rodriguez"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-consultancy-secondary">David Rodriguez</div>
                    <div className="text-sm text-gray-500">Founder, GrowthScale Ventures</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
