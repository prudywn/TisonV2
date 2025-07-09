import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Phone } from "lucide-react";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Strategic Assessment",
      description: "Perfect for organizations looking to identify opportunities and develop initial strategic direction.",
      price: "Starting at $25,000",
      duration: "4-6 weeks",
      popular: false,
      features: [
        "Comprehensive business assessment",
        "Strategic recommendations report",
        "Executive presentation",
        "3-month implementation roadmap",
        "Key stakeholder interviews",
        "Competitive analysis",
        "Initial quick wins identification"
      ],
      ideal: "Small to mid-size companies, specific department challenges"
    },
    {
      name: "Transformation Program",
      description: "Comprehensive consulting engagement for organizations ready to implement significant change.",
      price: "Starting at $75,000",
      duration: "3-6 months",
      popular: true,
      features: [
        "Everything in Strategic Assessment",
        "Hands-on implementation support",
        "Change management program",
        "Team training and development",
        "Process optimization",
        "Technology recommendations",
        "Performance monitoring setup",
        "Monthly progress reviews"
      ],
      ideal: "Growing companies, operational transformation needs"
    },
    {
      name: "Enterprise Partnership",
      description: "Long-term strategic partnership for large organizations with complex, ongoing needs.",
      price: "Custom pricing",
      duration: "6+ months",
      popular: false,
      features: [
        "Everything in Transformation Program",
        "Dedicated consultant team",
        "C-level advisory services",
        "Cross-functional optimization",
        "Advanced analytics implementation",
        "Leadership development",
        "Culture transformation",
        "Continuous optimization",
        "24/7 strategic support"
      ],
      ideal: "Large enterprises, complex multi-department initiatives"
    }
  ];

  const addOns = [
    {
      name: "Executive Coaching",
      description: "One-on-one leadership development",
      price: "$5,000/month per executive"
    },
    {
      name: "Team Workshops",
      description: "Specialized training sessions",
      price: "$2,500 per day"
    },
    {
      name: "Technology Assessment",
      description: "Comprehensive tech stack evaluation",
      price: "$15,000"
    },
    {
      name: "Market Research",
      description: "Industry-specific analysis",
      price: "$10,000"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-consultancy-secondary mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the engagement model that best fits your needs and budget. 
              All pricing is transparent with no hidden fees, and we offer flexible 
              payment terms to accommodate your organization's requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-consultancy-primary transform scale-105' : ''
              }`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-consultancy-primary text-white">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-consultancy-secondary">
                    {tier.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-consultancy-primary">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {tier.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-consultancy-secondary mb-2">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-consultancy-primary mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-consultancy-secondary mb-2">
                        Ideal For:
                      </h4>
                      <p className="text-sm text-gray-600">{tier.ideal}</p>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-consultancy-primary hover:bg-consultancy-primary/90 text-white'
                          : 'bg-consultancy-secondary hover:bg-consultancy-secondary/90 text-white'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your engagement with specialized services tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-consultancy-secondary mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {addon.description}
                  </p>
                  <div className="text-xl font-bold text-consultancy-primary">
                    {addon.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
                Investment That Pays for Itself
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our clients typically see a return on investment within 6-12 months of engagement completion. 
                The value we deliver through operational efficiency, cost reduction, and growth acceleration 
                far exceeds the initial investment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3" />
                  <span className="text-gray-700">Average ROI of 300% within 12 months</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3" />
                  <span className="text-gray-700">No hidden fees or surprise costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3" />
                  <span className="text-gray-700">Flexible payment terms available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-consultancy-primary mr-3" />
                  <span className="text-gray-700">Money-back guarantee on deliverables</span>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="ROI and value creation"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do you determine the final project cost?",
                answer: "Project costs are determined based on scope, complexity, timeline, and required resources. After our initial consultation, we provide a detailed proposal with transparent pricing and clear deliverables."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment terms including milestone-based payments, monthly installments, and performance-based fee structures to accommodate different budget requirements."
              },
              {
                question: "What if the project scope changes during engagement?",
                answer: "We use a change management process that documents any scope modifications and their impact on timeline and budget. All changes are approved before implementation."
              },
              {
                question: "Is there a minimum engagement size?",
                answer: "Our Strategic Assessment package starts at $25,000, but we can discuss smaller engagements for specific needs or pilot projects."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-consultancy-secondary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
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
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a free consultation to discuss your needs and get a customized proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-consultancy-accent hover:bg-consultancy-accent/90 text-consultancy-secondary px-8 py-4 rounded-full text-lg font-semibold">
                Get Free Consultation
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-consultancy-primary px-8 py-4 rounded-full text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +1 (555) 012-3456
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
