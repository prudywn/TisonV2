import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, ServerCog, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Discovery & Analysis",
      description: "Deep dive into your current state, challenges, and opportunities through comprehensive assessment.",
      details: [
        "Stakeholder interviews and workshops",
        "Current state analysis and gap assessment",
        "Market research and competitive analysis",
        "Data collection and baseline metrics"
      ]
    },
    {
      number: 2,
      icon: Lightbulb,
      title: "Strategy Design",
      description: "Develop customized strategies and solutions based on data insights and industry best practices.",
      details: [
        "Strategic roadmap development",
        "Solution architecture and design",
        "Risk assessment and mitigation planning",
        "ROI projections and business case"
      ]
    },
    {
      number: 3,
      icon: ServerCog,
      title: "Implementation",
      description: "Execute the strategy with hands-on support, change management, and continuous optimization.",
      details: [
        "Project management and execution",
        "Change management and training",
        "Process implementation and optimization",
        "Technology deployment and integration"
      ]
    },
    {
      number: 4,
      icon: BarChart3,
      title: "Measure & Optimize",
      description: "Track progress against KPIs and continuously refine approach for sustained success.",
      details: [
        "Performance monitoring and reporting",
        "Continuous improvement initiatives",
        "Success metrics tracking",
        "Long-term support and optimization"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-consultancy-secondary mb-6">
              How We Work
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our proven methodology ensures successful outcomes through a structured, collaborative 
              approach tailored to your unique needs and organizational context.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center group">
                  <Card className="hover:shadow-xl transition-all duration-300 relative">
                    <CardContent className="p-8">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-consultancy-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div className="mt-4 mb-6">
                        <Icon className="h-12 w-12 text-consultancy-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-consultancy-secondary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Detailed Process Breakdown
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each phase is carefully designed to build upon the previous one, ensuring 
              comprehensive coverage and sustainable results.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.number} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? "order-1" : "order-2"}>
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1454165804606-c3d57bc86b40' :
                        index === 1 ? '1559136555-9303baea8ebd' :
                        index === 2 ? '1552664730-d307ca884978' :
                        '1551434678-e076c223a692'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                      alt={step.title}
                      className="rounded-2xl shadow-lg w-full h-auto"
                    />
                  </div>
                  <div className={isEven ? "order-2" : "order-1"}>
                    <div className="flex items-center mb-6">
                      <div className="bg-consultancy-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                        {step.number}
                      </div>
                      <Icon className="h-8 w-8 text-consultancy-primary mr-4" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-consultancy-secondary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-consultancy-secondary">Key Activities:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-consultancy-primary mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Typical Project Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While every engagement is unique, here's a typical timeline for our 
              comprehensive consulting projects.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-consultancy-primary hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                { phase: "Discovery & Analysis", duration: "2-4 weeks", description: "Comprehensive assessment and baseline establishment" },
                { phase: "Strategy Design", duration: "3-6 weeks", description: "Solution development and roadmap creation" },
                { phase: "Implementation", duration: "8-16 weeks", description: "Execution and change management" },
                { phase: "Measure & Optimize", duration: "Ongoing", description: "Monitoring and continuous improvement" }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                      <Card className="inline-block">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-consultancy-secondary mb-2">
                            {item.phase}
                          </h3>
                          <p className="text-consultancy-primary font-semibold mb-2">
                            {item.duration}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-consultancy-primary rounded-full border-4 border-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Why Our Approach Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-consultancy-secondary mb-4">
                  Collaborative Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We work alongside your team, not as external advisors, ensuring knowledge 
                  transfer and sustainable capability building.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-consultancy-secondary font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-consultancy-secondary mb-4">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every recommendation is backed by rigorous analysis and industry benchmarks, 
                  ensuring decisions are based on facts, not assumptions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-consultancy-secondary mb-4">
                  Measurable Results
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We establish clear KPIs from day one and track progress continuously, 
                  ensuring accountability and demonstrable value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our proven methodology can be tailored to address 
            your specific challenges and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-consultancy-accent hover:bg-consultancy-accent/90 text-consultancy-secondary px-8 py-4 rounded-full text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-consultancy-primary px-8 py-4 rounded-full text-lg font-semibold"
              >
                See Our Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
