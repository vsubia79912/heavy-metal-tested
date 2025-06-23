# Content Import Guide

This guide will help you import your existing static content into Sanity CMS so you can manage it through the visual editor.

## 🚀 Quick Start

### Step 1: Get Your Sanity Token

1. **Go to your Sanity project**: https://www.sanity.io/manage/personal/project/tx8g7o6u
2. **Navigate to API section**
3. **Create a new token** with "Editor" permissions
4. **Copy the token** (it starts with `sk...`)

### Step 2: Add Token to Environment

1. **Open your `.env.local` file** (create it if it doesn't exist)
2. **Add your token**:
   ```
   SANITY_TOKEN=sk_your_token_here
   ```

### Step 3: Run the Import Script

```bash
npm run import-content
```

## 📦 What Gets Imported

The script will create:

### 🏠 Homepage Content
- **Hero Section**: "Scientific Testing for Heavy Metals"
- **Features Section**: "Why Choose Our Certification" with 4 features
- **FAQ Section**: 7 frequently asked questions about testing

### 📝 Sample Blog Posts
1. **"Understanding Heavy Metal Testing: A Complete Guide"**
   - Author: Dr. Sarah Chen
   - Category: Industry Insights
   - Reading time: 5 minutes

2. **"The Science Behind ICP-MS Testing Technology"**
   - Author: Michael Rodriguez
   - Category: Testing Technology
   - Reading time: 4 minutes

### 👥 Sample Authors
- **Dr. Sarah Chen**: Lead scientist and technical director
- **Michael Rodriguez**: Certification specialist and regulatory expert

### 📂 Sample Categories
- **Testing Technology**: Articles about testing methodologies
- **Safety Standards**: Information about regulations and compliance
- **Industry Insights**: News and insights about the industry

## ✅ After Import

1. **Visit Sanity Studio**: http://localhost:3333
2. **You'll see all your content** in the left sidebar
3. **Edit any content** using the visual editor
4. **Your website will automatically update** with the new content

## 🔧 Customizing the Import

If you want to modify what gets imported:

1. **Edit `scripts/import-content.js`**
2. **Modify the data objects** at the top of the file
3. **Run the import again** (note: this will create duplicates)

## 🎯 SEO Features Included

All imported content includes:

- **SEO titles** and meta descriptions
- **Keywords** for search optimization
- **Structured data** for better search results
- **Reading time** estimates for blog posts
- **Proper heading structure** (H1, H2, H3)

## 📝 Next Steps

After importing:

1. **Add images** to your blog posts and pages
2. **Create more blog posts** using the new SEO fields
3. **Customize the homepage** sections as needed
4. **Add more authors** and categories
5. **Set up Open Graph images** for social sharing

## 🆘 Troubleshooting

### "Token not found" error
- Make sure you've added `SANITY_TOKEN` to your `.env.local` file
- Ensure the token has "Editor" permissions

### "Project not found" error
- Verify your project ID is correct in the script
- Check that you're using the right dataset name

### Content not appearing on website
- Make sure your Sanity Studio is running (`npx sanity dev`)
- Check that your Next.js dev server is running (`npm run dev`)
- Verify the content is published (not in draft mode)

## 🎉 Success!

Once the import is complete, you'll have:
- ✅ A fully functional CMS with your existing content
- ✅ SEO-optimized blog posts and pages
- ✅ Professional author profiles and categories
- ✅ Easy-to-use visual editor for future content

Your website will now use Sanity content instead of static content, and you can manage everything through the beautiful Sanity Studio interface! 