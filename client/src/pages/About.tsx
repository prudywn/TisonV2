import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import TeamMemberCard from "@/components/TeamMember";
import { Target, Heart, Award, Users } from "lucide-react";
import type { TeamMember } from "@shared/schema";

export default function About() {
  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-consultancy-secondary mb-6">
              About ConsultancyPro
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a mission to transform businesses through strategic consulting, 
              we combine deep industry expertise with innovative methodologies to deliver 
              sustainable growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ConsultancyPro was founded in 2015 with a simple yet powerful vision: to bridge 
                the gap between strategic thinking and practical implementation. Our founders, 
                veterans of top-tier consulting firms and Fortune 500 companies, recognized that 
                many businesses struggled to translate strategic insights into actionable results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the years, we've grown from a small team of passionate consultants to a 
                global network of experts, serving clients across industries and continents. 
                What hasn't changed is our commitment to delivering measurable value and building 
                lasting partnerships with our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have helped over 500 organizations transform their operations, 
                accelerate growth, and navigate complex challenges in an ever-evolving business landscape.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Our team collaborating"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Our Mission, Vision & Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-consultancy-secondary mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower organizations with strategic insights and practical solutions that 
                  drive sustainable growth, operational excellence, and competitive advantage in 
                  today's dynamic business environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-consultancy-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-consultancy-secondary mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the world's most trusted strategic consulting partner, recognized for our 
                  ability to transform complex challenges into breakthrough opportunities that 
                  create lasting value for all stakeholders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-consultancy-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-consultancy-secondary mb-4">Values</h3>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>• Excellence in everything we do</li>
                  <li>• Integrity and transparency</li>
                  <li>• Collaborative partnerships</li>
                  <li>• Continuous innovation</li>
                  <li>• Measurable impact</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of strategic consultants brings decades of experience across 
              industries and disciplines, united by a passion for driving transformational results.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers?.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-consultancy-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These numbers reflect our commitment to delivering measurable value and building 
              lasting partnerships with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                500+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                98%
              </div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                $50M+
              </div>
              <div className="text-gray-300">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                25+
              </div>
              <div className="text-gray-300">Industries Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
