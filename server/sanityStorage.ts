import { 
  sanityClient, 
  queries, 
  transformSanityService,
  transformSanityTeamMember,
  transformSanityTestimonial,
  transformSanityCaseStudy,
  transformSanityBlogPost
} from './sanity';
import { IStorage } from './storage';
import type { 
  Service, TeamMember, Testimonial, CaseStudy, 
  BlogPost, ContactSubmission, InsertContactSubmission 
} from '@shared/schema';

export class SanityStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.currentId = 1;
  }

  async getServices(): Promise<Service[]> {
    try {
      const data = await sanityClient.fetch(queries.services);
      return data.map(transformSanityService);
    } catch (error) {
      console.error('Error fetching services from Sanity:', error);
      // Fallback to empty array if Sanity is not configured
      return [];
    }
  }

  async getService(id: number): Promise<Service | undefined> {
    try {
      const data = await sanityClient.fetch(queries.service, { id: id.toString() });
      return data ? transformSanityService(data) : undefined;
    } catch (error) {
      console.error('Error fetching service from Sanity:', error);
      return undefined;
    }
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    try {
      const data = await sanityClient.fetch(queries.teamMembers);
      return data.map(transformSanityTeamMember);
    } catch (error) {
      console.error('Error fetching team members from Sanity:', error);
      return [];
    }
  }

  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    try {
      const data = await sanityClient.fetch('*[_type == "teamMember" && _id == $id][0]', { id: id.toString() });
      return data ? transformSanityTeamMember(data) : undefined;
    } catch (error) {
      console.error('Error fetching team member from Sanity:', error);
      return undefined;
    }
  }

  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const data = await sanityClient.fetch(queries.testimonials);
      return data.map(transformSanityTestimonial);
    } catch (error) {
      console.error('Error fetching testimonials from Sanity:', error);
      return [];
    }
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    try {
      const data = await sanityClient.fetch(queries.caseStudies);
      return data.map(transformSanityCaseStudy);
    } catch (error) {
      console.error('Error fetching case studies from Sanity:', error);
      return [];
    }
  }

  async getCaseStudy(id: number): Promise<CaseStudy | undefined> {
    try {
      const data = await sanityClient.fetch(queries.caseStudy, { id: id.toString() });
      return data ? transformSanityCaseStudy(data) : undefined;
    } catch (error) {
      console.error('Error fetching case study from Sanity:', error);
      return undefined;
    }
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const data = await sanityClient.fetch(queries.blogPosts);
      return data.map(transformSanityBlogPost);
    } catch (error) {
      console.error('Error fetching blog posts from Sanity:', error);
      return [];
    }
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    try {
      const data = await sanityClient.fetch(queries.blogPost, { id: id.toString() });
      return data ? transformSanityBlogPost(data) : undefined;
    } catch (error) {
      console.error('Error fetching blog post from Sanity:', error);
      return undefined;
    }
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
    
    // Optionally, you can also save contact submissions to Sanity
    try {
      await sanityClient.create({
        _type: 'contactSubmission',
        name: submission.name,
        email: submission.email,
        company: submission.company,
        message: submission.message,
        submittedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error saving contact submission to Sanity:', error);
      // Continue even if Sanity save fails
    }
    
    return contactSubmission;
  }
}