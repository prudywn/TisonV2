import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="text-4xl text-consultancy-primary mb-4">
            <i className={`fas fa-${service.icon}`}></i>
          </div>
          <h3 className="text-2xl font-bold text-consultancy-secondary mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
        
        {service.features && service.features.length > 0 && (
          <div className="mb-6">
            <ul className="text-sm text-gray-600 space-y-1">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-consultancy-primary rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <Link href={`/services#service-${service.id}`}>
          <span className="text-consultancy-primary font-semibold hover:text-blue-700 flex items-center group-hover:translate-x-2 transition-transform duration-200 cursor-pointer">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
