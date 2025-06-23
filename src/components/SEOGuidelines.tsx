import React from 'react'

interface SEOGuidelinesProps {
  type: 'post' | 'page'
}

export default function SEOGuidelines({ type }: SEOGuidelinesProps) {
  const isPost = type === 'post'
  
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-blue-900 mb-3">
        📝 SEO Best Practices for {isPost ? 'Blog Posts' : 'Pages'}
      </h3>
      
      <div className="space-y-4 text-sm text-blue-800">
        <div>
          <h4 className="font-medium mb-2">🎯 SEO Title</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Keep between 50-60 characters</li>
            <li>Include your main keyword</li>
            <li>Make it compelling and click-worthy</li>
            <li>Leave empty to use the main title</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">📄 Meta Description</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Keep between 150-160 characters</li>
            <li>Summarize the main benefit or value</li>
            <li>Include a call-to-action when appropriate</li>
            <li>Use your main keyword naturally</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">🏷️ Keywords</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Add 3-5 relevant keywords</li>
            <li>Focus on long-tail keywords</li>
            <li>Include variations of your main topic</li>
            <li>Think about what your audience would search for</li>
          </ul>
        </div>

        {isPost && (
          <div>
            <h4 className="font-medium mb-2">📖 Content Structure</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use one H1 heading (the main title)</li>
              <li>Use H2 and H3 headings to organize content</li>
              <li>Include your main keyword in the first paragraph</li>
              <li>Add alt text to all images</li>
              <li>Use internal and external links naturally</li>
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-medium mb-2">🖼️ Open Graph Image</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Use 1200x630px for optimal social sharing</li>
            <li>Include your brand or logo</li>
            <li>Make it visually appealing and relevant</li>
            <li>Add descriptive alt text</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">🔗 Internal Linking</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Link to related blog posts or pages</li>
            <li>Use descriptive anchor text</li>
            <li>Don't overdo it - 2-3 internal links per post is good</li>
            <li>Link to your main service pages</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
          <h4 className="font-medium text-yellow-800 mb-2">⚠️ Important Notes</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-yellow-700">
            <li>Don't stuff keywords - write naturally for your audience</li>
            <li>Focus on providing value first, SEO second</li>
            <li>Update content regularly to keep it fresh</li>
            <li>Use the "No Index" option only for private or duplicate content</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 