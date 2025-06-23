import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Brief summary of the post (used for meta description if not provided)',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for SEO and accessibility. Describe the image content.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption displayed below the image',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility. Describe the image content.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional caption displayed below the image',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    // SEO Section
    defineField({
      name: 'seoSection',
      title: 'SEO Settings',
      type: 'object',
      description: 'Search engine optimization settings for this post',
      fields: [
        {
          name: 'seoTitle',
          title: 'SEO Title',
          type: 'string',
          description: 'Title for search engines (50-60 characters recommended). Leave empty to use main title.',
          validation: (Rule) => Rule.max(60).warning('SEO titles should be under 60 characters'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Description for search engines and social media (150-160 characters recommended)',
          validation: (Rule) => Rule.max(160).warning('Meta descriptions should be under 160 characters'),
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Relevant keywords for this post (comma-separated)',
          options: {
            layout: 'tags',
          },
        },
        {
          name: 'openGraphImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended). Leave empty to use featured image.',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alt text for the Open Graph image',
            },
          ],
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Canonical URL if this content exists elsewhere (optional)',
        },
        {
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          description: 'Prevent search engines from indexing this post',
          initialValue: false,
        },
        {
          name: 'noFollow',
          title: 'No Follow',
          type: 'boolean',
          description: 'Prevent search engines from following links on this post',
          initialValue: false,
        },
      ],
    }),
    // Structured Data
    defineField({
      name: 'structuredData',
      title: 'Structured Data',
      type: 'object',
      description: 'Additional structured data for search engines',
      fields: [
        {
          name: 'articleType',
          title: 'Article Type',
          type: 'string',
          options: {
            list: [
              {title: 'Blog Posting', value: 'BlogPosting'},
              {title: 'News Article', value: 'NewsArticle'},
              {title: 'Technical Article', value: 'TechArticle'},
              {title: 'How-to Article', value: 'HowTo'},
            ],
          },
          initialValue: 'BlogPosting',
        },
        {
          name: 'readingTime',
          title: 'Reading Time (minutes)',
          type: 'number',
          description: 'Estimated reading time in minutes',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
})

// New schema for pages
export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // SEO Section
    defineField({
      name: 'seoSection',
      title: 'SEO Settings',
      type: 'object',
      description: 'Search engine optimization settings for this page',
      fields: [
        {
          name: 'seoTitle',
          title: 'SEO Title',
          type: 'string',
          description: 'Title for search engines (50-60 characters recommended). Leave empty to use main title.',
          validation: (Rule) => Rule.max(60).warning('SEO titles should be under 60 characters'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Description for search engines and social media (150-160 characters recommended)',
          validation: (Rule) => Rule.max(160).warning('Meta descriptions should be under 160 characters'),
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Relevant keywords for this page (comma-separated)',
          options: {
            layout: 'tags',
          },
        },
        {
          name: 'openGraphImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended)',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alt text for the Open Graph image',
            },
          ],
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Canonical URL if this content exists elsewhere (optional)',
        },
        {
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          description: 'Prevent search engines from indexing this page',
          initialValue: false,
        },
        {
          name: 'noFollow',
          title: 'No Follow',
          type: 'boolean',
          description: 'Prevent search engines from following links on this page',
          initialValue: false,
        },
      ],
    }),
    // Structured Data
    defineField({
      name: 'structuredData',
      title: 'Structured Data',
      type: 'object',
      description: 'Additional structured data for search engines',
      fields: [
        {
          name: 'pageType',
          title: 'Page Type',
          type: 'string',
          options: {
            list: [
              {title: 'Web Page', value: 'WebPage'},
              {title: 'About Page', value: 'AboutPage'},
              {title: 'Contact Page', value: 'ContactPage'},
              {title: 'FAQ Page', value: 'FAQPage'},
              {title: 'Service Page', value: 'ServicePage'},
            ],
          },
          initialValue: 'WebPage',
        },
        {
          name: 'breadcrumbTitle',
          title: 'Breadcrumb Title',
          type: 'string',
          description: 'Title to display in breadcrumb navigation (shorter than main title)',
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        {type: 'heroSection'},
        {type: 'featuresSection'},
        {type: 'faqSection'},
        {type: 'contentSection'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare(selection) {
      const {title, slug} = selection
      return {
        title,
        subtitle: `/${slug}`,
      }
    },
  },
})

// Hero section schema
export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightText',
      title: 'Highlight Text',
      type: 'string',
      description: 'Text to highlight in a different color (e.g., "Heavy Metals")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        {name: 'text', title: 'Button Text', type: 'string'},
        {name: 'link', title: 'Button Link', type: 'string'},
      ],
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        {name: 'text', title: 'Button Text', type: 'string'},
        {name: 'link', title: 'Button Link', type: 'string'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare(selection) {
      return {
        title: 'Hero Section',
        subtitle: selection.title,
      }
    },
  },
})

// Features section schema
export const featuresSection = defineType({
  name: 'featuresSection',
  title: 'Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            {name: 'title', title: 'Feature Title', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'description', title: 'Feature Description', type: 'text', rows: 3},
            {name: 'icon', title: 'Icon Name', type: 'string', description: 'Icon name (shield, beaker, award, clipboard)'},
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'Features Section',
        subtitle: selection.title,
      }
    },
  },
})

// FAQ section schema
export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faq',
          fields: [
            {name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required()},
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'contactText',
      title: 'Contact Text',
      type: 'string',
    }),
    defineField({
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'FAQ Section',
        subtitle: selection.title,
      }
    },
  },
})

// Generic content section schema
export const contentSection = defineType({
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Gray Light', value: 'gray-50'},
          {title: 'Blue Light', value: 'blue-50'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'Content Section',
        subtitle: selection.title || 'Untitled',
      }
    },
  },
})

export const schema = {
  types: [post, author, category, page, heroSection, featuresSection, faqSection, contentSection],
} 