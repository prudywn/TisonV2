import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@shared/schema";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-8">
        <Badge
          variant="secondary"
          className="bg-consultancy-primary text-white mb-4"
        >
          {caseStudy.category}
        </Badge>
        <h3 className="text-2xl font-bold text-consultancy-secondary mb-4">
          {caseStudy.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {caseStudy.description}
        </p>
        
        {caseStudy.results && caseStudy.results.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {caseStudy.results.slice(0, 3).map((result, index) => {
              const parts = result.split(' ');
              const value = parts[0];
              const label = parts.slice(1).join(' ');
              
              return (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-consultancy-primary">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        <button className="text-consultancy-primary font-semibold hover:text-blue-700 flex items-center group">
          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </CardContent>
    </Card>
  );
}
