import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-consultancy-secondary mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped organizations across industries achieve breakthrough 
              results through strategic consulting, innovative solutions, and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid lg:grid-cols-2 gap-12">
              {[...Array(4)].map((_, i) => (
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
              {caseStudies?.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detailed Case Study Examples */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into some of our most impactful client engagements and the 
              transformational results we achieved together.
            </p>
          </div>
          
          {/* Technology Case Study Detail */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Technology transformation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12">
                  <Badge className="bg-consultancy-primary text-white mb-4">
                    Technology
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-consultancy-secondary mb-4">
                    Global SaaS Platform Scale-Up
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A mid-sized SaaS company was struggling to scale internationally due to 
                    operational inefficiencies and lack of strategic partnerships. Our team 
                    implemented a comprehensive transformation strategy that included process 
                    optimization, strategic alliance development, and market expansion planning.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-consultancy-primary">300%</div>
                      <div className="text-sm text-gray-500">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-consultancy-primary">15</div>
                      <div className="text-sm text-gray-500">New Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-consultancy-primary">60%</div>
                      <div className="text-sm text-gray-500">Cost Reduction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Challenge:</strong> Limited international presence and inefficient operations</p>
                    <p><strong>Solution:</strong> Strategic partnerships, process optimization, market expansion</p>
                    <p><strong>Timeline:</strong> 18 months</p>
                    <p><strong>Result:</strong> $50M ARR achieved with sustainable growth framework</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Manufacturing Case Study Detail */}
          <div>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <CardContent className="p-8 lg:p-12 order-2 lg:order-1">
                  <Badge className="bg-consultancy-accent text-consultancy-secondary mb-4">
                    Manufacturing
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-consultancy-secondary mb-4">
                    Operational Excellence Transformation
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A traditional manufacturing company needed to modernize operations to compete 
                    with industry leaders. We implemented a comprehensive digital transformation 
                    and lean methodology program that revolutionized their production capabilities.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-consultancy-primary">45%</div>
                      <div className="text-sm text-gray-500">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-consultancy-primary">$2M</div>
                      <div className="text-sm text-gray-500">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-consultancy-primary">98%</div>
                      <div className="text-sm text-gray-500">Quality Score</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Challenge:</strong> Outdated processes and quality issues</p>
                    <p><strong>Solution:</strong> Digital transformation and lean manufacturing</p>
                    <p><strong>Timeline:</strong> 12 months</p>
                    <p><strong>Result:</strong> Industry-leading efficiency and quality metrics</p>
                  </div>
                </CardContent>
                <div className="aspect-video lg:aspect-auto order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Manufacturing excellence"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-consultancy-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Collective Impact Across All Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The cumulative results from our client engagements demonstrate our commitment 
              to delivering measurable value and sustainable outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                $500M+
              </div>
              <div className="text-gray-300">Total Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                85%
              </div>
              <div className="text-gray-300">Average ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                150+
              </div>
              <div className="text-gray-300">Successful Transformations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-consultancy-accent mb-2">
                95%
              </div>
              <div className="text-gray-300">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
