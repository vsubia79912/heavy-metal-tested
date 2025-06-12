# Heavy Metal Tested - Certification Website

A modern certification website built with Next.js and Sanity CMS for companies that provide heavy metal testing services and certification for consumer products.

## 🚀 Features

- **Modern Design**: Clean, professional interface built with React and Tailwind CSS
- **Content Management**: Powered by Sanity CMS for easy content updates
- **Blog System**: Dynamic blog with categories and author support
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO features with meta tags and structured data
- **Fast Performance**: Optimized with Next.js App Router and server-side rendering
- **Type Safety**: Full TypeScript implementation

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Icons**: Lucide React
- **Deployment Ready**: Vercel optimized

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd heavy-metal-tested
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Sanity configuration to `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

4. Start the development server:
```bash
npm run dev
```

5. Start Sanity Studio (in a separate terminal):
```bash
npx sanity dev
```

Your website will be available at `http://localhost:3000` and Sanity Studio at `http://localhost:3333`.

## 🏗 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── blog/           # Blog pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # React components
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   └── lib/
│       ├── sanity.ts       # Sanity client and queries
│       └── types.ts        # TypeScript interfaces
├── sanity/
│   └── schema.ts           # Sanity schema definitions
├── sanity.config.ts        # Sanity configuration
└── tailwind.config.ts      # Tailwind configuration
```

## 📝 Content Management

The website uses Sanity CMS for content management:

- **Pages**: Create and manage website pages
- **Blog Posts**: Write and publish blog articles
- **Authors**: Manage blog authors
- **Categories**: Organize blog content
- **Hero Sections**: Customize homepage hero content
- **Features**: Manage feature listings
- **FAQs**: Update frequently asked questions

Access Sanity Studio at `http://localhost:3333` during development.

## 🚀 Deployment

### Deploy with Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Sanity Setup

1. Create a new Sanity project at [sanity.io](https://sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`
3. Configure your project ID and dataset in `sanity.config.ts`

### Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_write_token
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx sanity dev` - Start Sanity Studio

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue on GitHub or contact the development team.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. 