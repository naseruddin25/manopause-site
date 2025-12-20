import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Manopause.info - Education & Support',
    description: 'Educational resources for understanding relationship conflict, abuse patterns, trauma responses, and healthy boundaries. Support for men, women, children, and families.',
    site: context.site || 'https://manopause.info',
    items: [
      {
        title: 'What Is Abuse?',
        description: 'Understanding abuse beyond physical violence — emotional, psychological, and coercive control patterns.',
        link: '/learn/what-is-abuse/',
        pubDate: new Date('2025-01-01'),
        categories: ['Education', 'Abuse Patterns'],
      },
      {
        title: 'Trauma & Stress Responses',
        description: 'How trauma and chronic stress affect behavior, and understanding fight, flight, freeze, and fawn responses.',
        link: '/learn/trauma-responses/',
        pubDate: new Date('2025-01-01'),
        categories: ['Education', 'Trauma'],
      },
      {
        title: 'Patterns Library',
        description: 'A comprehensive guide to recognizing harmful relationship patterns including accusations, threats, surveillance, and control.',
        link: '/learn/patterns/',
        pubDate: new Date('2025-01-01'),
        categories: ['Education', 'Patterns'],
      },
      {
        title: 'Hormones & Behavior',
        description: 'Educational overview of how hormonal changes can affect mood, behavior, and relationships.',
        link: '/learn/hormones/',
        pubDate: new Date('2025-01-01'),
        categories: ['Education', 'Health'],
      },
      {
        title: 'De-escalation Tools',
        description: 'Practical techniques for reducing tension and managing heated moments safely.',
        link: '/tools/de-escalation/',
        pubDate: new Date('2025-01-01'),
        categories: ['Tools', 'De-escalation'],
      },
      {
        title: 'Boundary Skills',
        description: 'Learn to set boundaries that protect without escalating conflict.',
        link: '/tools/boundaries/',
        pubDate: new Date('2025-01-01'),
        categories: ['Tools', 'Boundaries'],
      },
      {
        title: 'Documentation Guide',
        description: 'How to keep clear records of incidents for safety planning and future reference.',
        link: '/tools/documentation/',
        pubDate: new Date('2025-01-01'),
        categories: ['Tools', 'Documentation'],
      },
      {
        title: 'Digital Safety',
        description: 'Protecting yourself from surveillance, monitoring, and technology-facilitated abuse.',
        link: '/tools/digital-safety/',
        pubDate: new Date('2025-01-01'),
        categories: ['Tools', 'Safety'],
      },
      {
        title: 'For Men',
        description: 'Dedicated resources for men experiencing relationship conflict or abuse.',
        link: '/for-men/',
        pubDate: new Date('2025-01-01'),
        categories: ['Audience', 'Men'],
      },
      {
        title: 'For Women',
        description: 'Resources and support pathways for women in difficult relationships.',
        link: '/for-women/',
        pubDate: new Date('2025-01-01'),
        categories: ['Audience', 'Women'],
      },
      {
        title: 'For Children & Teens',
        description: 'Age-appropriate resources for young people affected by family conflict.',
        link: '/for-children/',
        pubDate: new Date('2025-01-01'),
        categories: ['Audience', 'Children'],
      },
      {
        title: 'For Families & Supporters',
        description: 'How to help someone you care about who may be in an abusive situation.',
        link: '/for-families/',
        pubDate: new Date('2025-01-01'),
        categories: ['Audience', 'Families'],
      },
    ],
    customData: `<language>en-us</language>`,
  });
}
