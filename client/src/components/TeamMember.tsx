import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import type { TeamMember } from "@shared/schema";

interface TeamMemberProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <Card className="text-center group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="relative mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 object-cover"
          />
          <div className="absolute inset-0 bg-consultancy-primary bg-opacity-0 group-hover:bg-opacity-10 rounded-full transition-all duration-300"></div>
        </div>
        <h3 className="text-xl font-bold text-consultancy-secondary mb-2">
          {member.name}
        </h3>
        <p className="text-consultancy-primary font-medium mb-2">
          {member.role}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          {member.expertise}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {member.bio}
        </p>
        <div className="flex justify-center space-x-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="text-gray-400 hover:text-consultancy-primary transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              className="text-gray-400 hover:text-consultancy-primary transition-colors duration-200"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
