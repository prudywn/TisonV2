import { 
  services, teamMembers, testimonials, caseStudies, blogPosts, contactSubmissions,
  type Service, type TeamMember, type Testimonial, type CaseStudy, 
  type BlogPost, type ContactSubmission, type InsertContactSubmission 
} from "@shared/schema";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  
  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: number): Promise<TeamMember | undefined>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  
  // Case Studies
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudy(id: number): Promise<CaseStudy | undefined>;
  
  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  
  // Contact Submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private services: Map<number, Service>;
  private teamMembers: Map<number, TeamMember>;
  private testimonials: Map<number, Testimonial>;
  private caseStudies: Map<number, CaseStudy>;
  private blogPosts: Map<number, BlogPost>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.services = new Map();
    this.teamMembers = new Map();
    this.testimonials = new Map();
    this.caseStudies = new Map();
    this.blogPosts = new Map();
    this.contactSubmissions = new Map();
    this.currentId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed Services
    const servicesData: Service[] = [
      {
        id: 1,
        title: "Strategy Development",
        description: "Comprehensive strategic planning to align your organization's vision with market opportunities and competitive advantages.",
        icon: "cogs",
        features: ["Market Analysis", "Competitive Intelligence", "Strategic Roadmapping", "KPI Development"]
      },
      {
        id: 2,
        title: "Digital Transformation",
        description: "Navigate the digital landscape with confidence through our technology adoption and process optimization strategies.",
        icon: "digital-tachograph",
        features: ["Technology Assessment", "Digital Strategy", "Process Automation", "Change Management"]
      },
      {
        id: 3,
        title: "Performance Optimization",
        description: "Identify inefficiencies and implement data-driven solutions to maximize operational performance and ROI.",
        icon: "chart-bar",
        features: ["Operational Analysis", "Process Improvement", "Cost Optimization", "Performance Metrics"]
      },
      {
        id: 4,
        title: "Growth Strategy",
        description: "Develop scalable growth frameworks and market expansion strategies that deliver sustainable long-term results.",
        icon: "seedling",
        features: ["Market Expansion", "Revenue Growth", "Scaling Operations", "Partnership Strategy"]
      },
      {
        id: 5,
        title: "Risk Management",
        description: "Comprehensive risk assessment and mitigation strategies to protect your business and ensure continuity.",
        icon: "shield-alt",
        features: ["Risk Assessment", "Compliance Management", "Business Continuity", "Crisis Planning"]
      },
      {
        id: 6,
        title: "Change Management",
        description: "Guide your organization through transformation with proven change management methodologies and cultural alignment.",
        icon: "handshake",
        features: ["Cultural Assessment", "Change Planning", "Stakeholder Engagement", "Training & Development"]
      }
    ];

    servicesData.forEach(service => this.services.set(service.id, service));

    // Seed Team Members
    const teamData: TeamMember[] = [
      {
        id: 1,
        name: "Alex Thompson",
        role: "Managing Partner",
        expertise: "Strategy & Operations",
        bio: "Over 15 years of experience in strategic consulting and operations optimization across Fortune 500 companies.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        linkedin: "#",
        twitter: "#"
      },
      {
        id: 2,
        name: "Maria Garcia",
        role: "Senior Director",
        expertise: "Digital Transformation",
        bio: "Leading digital transformation initiatives for over a decade, specializing in technology adoption and process innovation.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        linkedin: "#",
        twitter: "#"
      },
      {
        id: 3,
        name: "James Wilson",
        role: "Principal Consultant",
        expertise: "Growth Strategy",
        bio: "Expert in scaling businesses and developing growth strategies that have generated over $100M in additional revenue for clients.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        linkedin: "#",
        twitter: "#"
      },
      {
        id: 4,
        name: "Dr. Lisa Chen",
        role: "Analytics Lead",
        expertise: "Data Science & AI",
        bio: "PhD in Data Science with expertise in AI-driven analytics and predictive modeling for business optimization.",
        image: "https://images.unsplash.com/photo-1559629819-638a8f0a4303?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        linkedin: "#",
        twitter: "#"
      }
    ];

    teamData.forEach(member => this.teamMembers.set(member.id, member));

    // Seed Testimonials
    const testimonialsData: Testimonial[] = [
      {
        id: 1,
        name: "Michael Chen",
        title: "CEO",
        company: "TechFlow Solutions",
        content: "ConsultancyPro delivered exceptional results that exceeded our expectations. Their strategic approach and attention to detail transformed our operations completely.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5
      },
      {
        id: 2,
        name: "Sarah Johnson",
        title: "COO",
        company: "Innovation Industries",
        content: "The team's expertise in digital transformation was invaluable. They guided us through complex challenges with clear, actionable strategies.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5
      },
      {
        id: 3,
        name: "David Rodriguez",
        title: "Founder",
        company: "GrowthScale Ventures",
        content: "Outstanding partnership from start to finish. Their data-driven approach helped us make informed decisions that drove real business value.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5
      }
    ];

    testimonialsData.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));

    // Seed Case Studies
    const caseStudiesData: CaseStudy[] = [
      {
        id: 1,
        title: "Global SaaS Platform Scale-Up",
        category: "Technology",
        description: "Helped a mid-sized SaaS company expand internationally, implementing scalable processes and strategic partnerships that resulted in 300% revenue growth within 18 months.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        results: ["300% Revenue Growth", "15 New Markets", "60% Cost Reduction"],
        metrics: ["$50M ARR achieved", "200% improvement in customer acquisition", "50% reduction in operational costs"]
      },
      {
        id: 2,
        title: "Operational Excellence Transformation",
        category: "Manufacturing",
        description: "Transformed a traditional manufacturing company through digital process optimization and lean methodologies, achieving industry-leading efficiency metrics.",
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        results: ["45% Efficiency Gain", "$2M Annual Savings", "98% Quality Score"],
        metrics: ["45% reduction in production time", "$2M in annual cost savings", "Zero-defect quality achieved"]
      }
    ];

    caseStudiesData.forEach(caseStudy => this.caseStudies.set(caseStudy.id, caseStudy));

    // Seed Blog Posts
    const blogData: BlogPost[] = [
      {
        id: 1,
        title: "The Future of Digital Transformation in 2024",
        excerpt: "Explore the latest trends and technologies shaping digital transformation strategies for modern businesses.",
        content: "Digital transformation continues to evolve...",
        author: "Maria Garcia",
        publishedAt: new Date("2024-01-15"),
        category: "Digital Strategy",
        readTime: 8
      },
      {
        id: 2,
        title: "Building Resilient Organizations Through Strategic Planning",
        excerpt: "Learn how strategic planning can help organizations navigate uncertainty and build long-term resilience.",
        content: "In today's volatile business environment...",
        author: "Alex Thompson",
        publishedAt: new Date("2024-01-10"),
        category: "Strategy",
        readTime: 6
      },
      {
        id: 3,
        title: "Data-Driven Decision Making: A Comprehensive Guide",
        excerpt: "Discover how to leverage data analytics to make informed business decisions that drive growth.",
        content: "Data-driven decision making has become...",
        author: "Dr. Lisa Chen",
        publishedAt: new Date("2024-01-05"),
        category: "Analytics",
        readTime: 10
      }
    ];

    blogData.forEach(post => this.blogPosts.set(post.id, post));
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }

  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values());
  }

  async getCaseStudy(id: number): Promise<CaseStudy | undefined> {
    return this.caseStudies.get(id);
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const contactSubmission: ContactSubmission = {
      id,
      name: submission.name,
      email: submission.email,
      company: submission.company || null,
      message: submission.message,
      submittedAt: new Date()
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
}

// Export storage instance based on configuration
import { SanityStorage } from './sanityStorage';

// Use Sanity if project ID is configured, otherwise fallback to memory storage
export const storage = process.env.SANITY_PROJECT_ID && process.env.SANITY_PROJECT_ID !== 'your-project-id' 
  ? new SanityStorage() 
  : new MemStorage();
