export const blogPosts = [
  {
    slug: 'starting-a-business-in-india-first-steps',
    title: 'Starting a Business in India: Practical First Steps',
    excerpt:
      'A clear sequence for registration, GST, and going live online — written as a MeerSphere guide, not legal advice.',
    category: 'Business setup',
    date: '2026-10-12',
    readTime: '6 min read',
    demo: true,
    content: [
      'This article is sample blog content for the MeerSphere website. Replace it with your own editorial once you begin publishing.',
      'Most founders try to do everything at once: a logo, a marketplace account, a website, and GST. A calmer sequence usually works better. Confirm what you sell, who you sell to, and whether you will operate as a proprietor or a company. Then gather identity, address, and bank documents before any filing.',
      'GST registration is often the gate for marketplace selling and B2B invoicing. Have PAN, proof of business address, and bank details ready. Approval timelines belong to the tax department; a complete application simply reduces avoidable delays.',
      'Once you can invoice, decide where demand already exists. Many Indian sellers start on Meesho, Flipkart, or Amazon because buyers are already there. A simple website can follow, so you also own a channel that is not rented from a marketplace.',
      'MeerSphere exists to keep these steps in one conversation — compliance assistance, seller setup, web, and brand — so you are not coordinating five vendors in the first month.',
    ],
  },
  {
    slug: 'marketplace-seller-accounts-what-to-prepare',
    title: 'Marketplace Seller Accounts: What to Prepare Before You Apply',
    excerpt:
      'Documents, catalogue basics, and account-health habits that make Meesho, Flipkart, and Amazon onboarding smoother.',
    category: 'Marketplaces',
    date: '2026-10-28',
    readTime: '5 min read',
    demo: true,
    content: [
      'This is placeholder educational content for the MeerSphere blog. Update or replace it with verified operational guidance from your team.',
      'Marketplaces approve sellers based on their own policies. You cannot control the decision, but you can control completeness. Typical requirements include GST (where applicable), a bank account, and KYC documents that match the legal name you will sell under.',
      'Prepare a small catalogue before you apply: accurate titles, measurements, and images on a clean background. Incomplete listings after approval create the first operational bottleneck.',
      'Treat account health as part of setup, not a later problem. Return windows, dispatch times, and listing accuracy affect whether the account stays useful. If you need help running the panel every week, monthly management is more honest than a one-time setup with no follow-through.',
    ],
  },
  {
    slug: 'what-a-business-website-should-do-in-the-first-90-days',
    title: 'What a Business Website Should Do in the First 90 Days',
    excerpt:
      'Trust, clarity, and a single next step matter more than extra pages. A practical brief for first-time site owners.',
    category: 'Websites',
    date: '2026-11-04',
    readTime: '7 min read',
    demo: true,
    content: [
      'Sample article for layout and SEO demonstration. Replace with MeerSphere’s own writing before promoting this URL.',
      'A first website does not need a dozen animations. It needs to answer: who you are, what you sell, where you operate, and how to reach you. If a visitor cannot find those four things on a phone, the design has failed regardless of how premium it looks.',
      'In the first 90 days, measure enquiries and call quality, not vanity traffic. Pair the site with GST-ready invoicing and, if you sell online, a catalogue that matches your marketplace listings so customers do not see conflicting information.',
      'MeerSphere builds business and e-commerce sites with this brief in mind: premium presentation, honest content, and a path to talk to a human.',
    ],
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
