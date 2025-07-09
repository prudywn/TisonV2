import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import { ArrowRight, BarChart3, Users, Rocket, Calendar } from "lucide-react";
import type { Service, Testimonial, CaseStudy } from "@shared/schema";

export default function Home() {
  const { data: services, isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const { data: caseStudies, isLoading: caseStudiesLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Business with{" "}
                <span className="text-consultancy-accent">Strategic Consulting</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                We help ambitious companies unlock growth, optimize operations, and navigate 
                complex challenges with data-driven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-consultancy-accent hover:bg-consultancy-accent/90 text-consultancy-secondary px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-consultancy-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
                  >
                    View Our Services
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-blue-600">
                <p className="text-blue-200 text-sm mb-4">Trusted by industry leaders</p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-blue-200">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-blue-200">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$50M+</div>
                    <div className="text-sm text-blue-200">Value Generated</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Business consulting team collaborating"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-consultancy-secondary mb-6">
              Why Leading Companies Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology combines industry expertise with cutting-edge analytics 
              to deliver measurable results that drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-light-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-consultancy-primary group-hover:text-white transition-all duration-300">
                  <BarChart3 className="h-10 w-10 text-consultancy-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-consultancy-secondary mb-4">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage advanced analytics and market intelligence to provide actionable 
                  insights that inform strategic decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-light-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-consultancy-primary group-hover:text-white transition-all duration-300">
                  <Users className="h-10 w-10 text-consultancy-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-consultancy-secondary mb-4">
                  Expert Team
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our consultants bring decades of experience across industries, delivering 
                  world-class expertise to every engagement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-light-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-consultancy-primary group-hover:text-white transition-all duration-300">
                  <Rocket className="h-10 w-10 text-consultancy-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-consultancy-secondary mb-4">
                  Proven Results
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Track record of delivering measurable ROI and sustainable growth for clients 
                  across various industries and markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-consultancy-secondary mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to address your most critical 
              business challenges and opportunities.
            </p>
          </div>
          
          {servicesLoading ? (
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
              {services?.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-consultancy-primary hover:bg-consultancy-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-consultancy-secondary mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped organizations achieve breakthrough results through 
              strategic consulting and innovative solutions.
            </p>
          </div>
          
          {caseStudiesLoading ? (
            <div className="grid lg:grid-cols-2 gap-12">
              {[...Array(2)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-video bg-gray-200"></div>
                  <CardContent className="p-8">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12">
              {caseStudies?.slice(0, 2).map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button 
                variant="outline"
                className="border-2 border-consultancy-secondary text-consultancy-secondary hover:bg-consultancy-secondary hover:text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-consultancy-secondary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the leaders who've experienced 
              transformational results.
            </p>
          </div>
          
          {testimonialsLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
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
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials?.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            Let's discuss how our strategic consulting can help you achieve breakthrough 
            results and sustainable growth.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="text-blue-200">Initial Consultation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24hr</div>
                  <div className="text-blue-200">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-200">Confidential</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-consultancy-accent hover:bg-consultancy-accent/90 text-consultancy-secondary px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-consultancy-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
            >
              Download Our Brochure
            </Button>
          </div>
          
          <div className="mt-8 text-blue-200">
            <p>
              Or call us directly:{" "}
              <a 
                href="tel:+1-555-0123" 
                className="text-consultancy-accent hover:text-yellow-400 font-semibold"
              >
                +1 (555) 012-3456
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
