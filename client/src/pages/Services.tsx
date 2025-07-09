import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Service } from "@shared/schema";

export default function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHero className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-consultancy-secondary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive consulting solutions designed to address your most critical business 
              challenges and unlock sustainable growth opportunities across all areas of your organization.
            </p>
          </AnimatedHero>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-12 bg-gray-200 rounded mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service) => (
                <div key={service.id} id={`service-${service.id}`}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
                Our Proven Methodology
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every engagement follows our time-tested approach that ensures maximum value 
                delivery and sustainable results. Our methodology combines strategic thinking 
                with practical implementation to drive measurable outcomes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive discovery and current state analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Strategic solution design with clear roadmaps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Hands-on implementation support and change management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Continuous monitoring and optimization for sustained success</span>
                </div>
              </div>
              
              <Link href="/how-it-works">
                <Button className="mt-8 bg-consultancy-primary hover:bg-consultancy-primary/90 text-white">
                  Learn About Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Strategic planning process"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, allowing us to bring 
              cross-sector insights and best practices to every engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Technology & Software",
              "Financial Services",
              "Healthcare & Life Sciences",
              "Manufacturing",
              "Retail & E-commerce",
              "Energy & Utilities",
              "Professional Services",
              "Government & Public Sector"
            ].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-consultancy-secondary">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our services can help transform your business 
            and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-consultancy-accent hover:bg-consultancy-accent/90 text-consultancy-secondary px-8 py-4 rounded-full text-lg font-semibold">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-consultancy-primary px-8 py-4 rounded-full text-lg font-semibold"
              >
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
