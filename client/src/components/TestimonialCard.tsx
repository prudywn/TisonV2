import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex text-consultancy-accent mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed italic">
            "{testimonial.content}"
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <div className="font-semibold text-consultancy-secondary">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-500">
              {testimonial.title}, {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
