# Sanity CMS Integration Setup

Your consultancy website now includes full Sanity CMS integration for content management. Follow these steps to set up and use Sanity CMS with your website.

## Setup Instructions

### 1. Create a Sanity Project

1. Visit [sanity.io](https://sanity.io) and create a free account
2. Create a new project
3. Choose a project name (e.g., "ConsultancyPro")
4. Select "Production" as your dataset name
5. Note down your **Project ID** - you'll need this

### 2. Install Sanity CLI (Optional - for local development)

```bash
npm install -g @sanity/cli
```

### 3. Set Up Environment Variables

Add these environment variables to your Replit project:

- `SANITY_PROJECT_ID`: Your Sanity project ID
- `SANITY_DATASET`: `production` (or your dataset name)
- `SANITY_TOKEN`: Your Sanity API token (for write operations)

To get your API token:
1. Go to your Sanity project dashboard
2. Navigate to Settings → API
3. Create a new token with "Editor" permissions
4. Copy the token

### 4. Create Sanity Studio (Optional)

You can create a separate Sanity Studio for content management:

```bash
npm create sanity@latest
```

When prompted:
- Use your existing project ID
- Import the schema files from the `sanity-schema/` folder

## Content Types

Your website supports these content types in Sanity:

### Services
- **Title**: Service name
- **Description**: Service description
- **Icon**: Font Awesome icon class
- **Features**: Array of feature strings
- **Order**: Display order

### Team Members
- **Name**: Team member name
- **Role**: Job title
- **Expertise**: Area of expertise
- **Bio**: Biography text
- **Image**: Profile photo
- **LinkedIn/Twitter**: Social media links
- **Order**: Display order

### Testimonials
- **Name**: Client name
- **Title**: Client job title
- **Company**: Client company
- **Content**: Testimonial text
- **Image**: Client photo
- **Rating**: 1-5 star rating

### Case Studies
- **Title**: Project title
- **Category**: Project category
- **Description**: Project description
- **Image**: Featured image
- **Results**: Array of result strings
- **Metrics**: Key performance metrics

### Blog Posts
- **Title**: Post title
- **Excerpt**: Short summary
- **Content**: Full content
- **Author**: Author name
- **Published Date**: Publication date
- **Category**: Post category
- **Read Time**: Estimated reading time
- **Image**: Featured image

### Contact Submissions
Contact form submissions are automatically saved to Sanity when users submit the contact form.

## How It Works

1. **Automatic Detection**: The website automatically detects if Sanity is configured
2. **Fallback System**: If Sanity isn't configured, it uses sample data
3. **Real-time Updates**: Content changes in Sanity appear immediately on your website
4. **Error Handling**: Graceful fallbacks if Sanity is unavailable

## Managing Content

### Option 1: Sanity Studio
Create a dedicated Sanity Studio for a full content management interface.

### Option 2: Sanity Dashboard
Use the web-based Sanity dashboard at sanity.io to manage content directly.

### Option 3: Programmatic API
Use Sanity's APIs to integrate with other systems or create custom management tools.

## Benefits

✅ **No Code Changes**: Update content without touching code
✅ **Real-time Updates**: Changes appear instantly
✅ **Rich Media**: Upload and manage images easily
✅ **Team Collaboration**: Multiple editors can manage content
✅ **Version Control**: Track content changes over time
✅ **Structured Content**: Consistent data structure
✅ **Global CDN**: Fast content delivery worldwide

## Next Steps

1. Set up your Sanity project and get your Project ID
2. Add environment variables to your Replit project
3. Start adding your real content through Sanity
4. Your website will automatically switch from sample data to your Sanity content

Need help? Check the [Sanity documentation](https://www.sanity.io/docs) or reach out for assistance.