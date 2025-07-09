import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create Sanity client
export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // Only needed for write operations
});

// Create image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  return builder.image(source);
}

// Sanity GROQ queries
export const queries = {
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    features[],
    order
  }`,
  
  teamMembers: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    expertise,
    bio,
    image {
      asset->{
        _id,
        url
      }
    },
    linkedin,
    twitter,
    order
  }`,
  
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    title,
    company,
    content,
    image {
      asset->{
        _id,
        url
      }
    },
    rating
  }`,
  
  caseStudies: `*[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    category,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
    results[],
    metrics[]
  }`,
  
  blogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    content,
    author,
    publishedAt,
    category,
    readTime,
    image {
      asset->{
        _id,
        url
      }
    }
  }`,
  
  blogPost: `*[_type == "blogPost" && _id == $id][0] {
    _id,
    title,
    excerpt,
    content,
    author,
    publishedAt,
    category,
    readTime,
    image {
      asset->{
        _id,
        url
      }
    }
  }`,
  
  service: `*[_type == "service" && _id == $id][0] {
    _id,
    title,
    description,
    icon,
    features[],
    order
  }`,
  
  caseStudy: `*[_type == "caseStudy" && _id == $id][0] {
    _id,
    title,
    category,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
    results[],
    metrics[]
  }`
};

// Transform Sanity data to match our schema
export function transformSanityService(sanityData: any): any {
  return {
    id: sanityData._id,
    title: sanityData.title,
    description: sanityData.description,
    icon: sanityData.icon,
    features: sanityData.features || []
  };
}

export function transformSanityTeamMember(sanityData: any): any {
  return {
    id: sanityData._id,
    name: sanityData.name,
    role: sanityData.role,
    expertise: sanityData.expertise,
    bio: sanityData.bio,
    image: sanityData.image?.asset?.url || '',
    linkedin: sanityData.linkedin,
    twitter: sanityData.twitter
  };
}

export function transformSanityTestimonial(sanityData: any): any {
  return {
    id: sanityData._id,
    name: sanityData.name,
    title: sanityData.title,
    company: sanityData.company,
    content: sanityData.content,
    image: sanityData.image?.asset?.url || '',
    rating: sanityData.rating
  };
}

export function transformSanityCaseStudy(sanityData: any): any {
  return {
    id: sanityData._id,
    title: sanityData.title,
    category: sanityData.category,
    description: sanityData.description,
    image: sanityData.image?.asset?.url || '',
    results: sanityData.results || [],
    metrics: sanityData.metrics || []
  };
}

export function transformSanityBlogPost(sanityData: any): any {
  return {
    id: sanityData._id,
    title: sanityData.title,
    excerpt: sanityData.excerpt,
    content: sanityData.content,
    author: sanityData.author,
    publishedAt: new Date(sanityData.publishedAt),
    category: sanityData.category,
    readTime: sanityData.readTime
  };
}