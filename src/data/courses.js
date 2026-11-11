import courseAngular from '../assets/course-angular.webp'
import courseBrand from '../assets/course-brand.webp'
import courseCrisis from '../assets/course-crisis.webp'
import courseDesignSystem from '../assets/course-design-system.webp'
import courseFinance from '../assets/course-finance.webp'
import courseInteractiveDesign from '../assets/course-interactive-design.webp'
import courseMern from '../assets/course-mern.webp'
import courseMongodb from '../assets/course-mongodb.webp'
import courseOperations from '../assets/course-operations.webp'
import coursePhotoshop from '../assets/course-photoshop.webp'
import courseRisk from '../assets/course-risk.webp'

const coursePath = (slug) => `/courses/${slug}`

const course = (slug, data) => ({
  slug,
  detailsTo: coursePath(slug),
  enrollTo: `/product/${slug}`,
  ...data,
})

export const coursesBySlug = {
  'crisis-management-and-problem-solving-strategies': course(
    'crisis-management-and-problem-solving-strategies',
    {
      category: 'Management',
      title: 'Crisis management and problem-solving strategies',
      image: courseCrisis,
      rating: '4.88 (210)',
      lessons: '6',
      enrolled: '8k',
      price: 'Free',
    },
  ),
  'advanced-photoshop-techniques-for-designers': course(
    'advanced-photoshop-techniques-for-designers',
    {
      category: 'Design',
      title: 'Advanced photoshop techniques for designers',
      image: coursePhotoshop,
      rating: '5.00 (1.2K)',
      lessons: '8',
      enrolled: '25k',
      price: 'Free',
    },
  ),
  'operations-management-and-process-improvement': course(
    'operations-management-and-process-improvement',
    {
      category: 'Finance',
      title: 'Operations management and process improvement',
      image: courseOperations,
      rating: '5.00 (812)',
      lessons: '12',
      enrolled: '23k',
      price: 'Free',
    },
  ),
  'database-integration-with-mongodb': course(
    'database-integration-with-mongodb',
    {
      category: 'Development',
      title: 'Database integration with MongoDB',
      image: courseMongodb,
      rating: '4.49 (756)',
      lessons: '10',
      enrolled: '7k',
      price: '$59',
    },
  ),
  'risk-management-and-business-continuity': course(
    'risk-management-and-business-continuity',
    {
      category: 'Management',
      title: 'Risk management and business continuity',
      image: courseRisk,
      rating: '4.88 (210)',
      lessons: '3',
      enrolled: '8k',
      price: '$49',
    },
  ),
  'full-stack-development-with-the-mern-stack': course(
    'full-stack-development-with-the-mern-stack',
    {
      category: 'Development',
      title: 'Full-stack development with the MERN stack',
      image: courseMern,
      rating: '5.00 (985)',
      lessons: '12',
      enrolled: '22k',
      price: '$72',
    },
  ),
  'design-systems-and-pattern-libraries': course(
    'design-systems-and-pattern-libraries',
    {
      category: 'Design',
      title: 'Design systems and pattern libraries',
      image: courseDesignSystem,
      rating: '5.00 (1.2K)',
      lessons: '8',
      enrolled: '25k',
      price: '$99',
    },
  ),
  'learn-interactive-web-design-by-building-real-projects': course(
    'learn-interactive-web-design-by-building-real-projects',
    {
      category: 'Design',
      title: 'Learn interactive Web Design by building real projects',
      image: courseInteractiveDesign,
      rating: '4.49 (756)',
      lessons: '12',
      enrolled: '23k',
      price: '$79',
    },
  ),
  'building-single-page-applications-with-angular': course(
    'building-single-page-applications-with-angular',
    {
      category: 'Development',
      title: 'Building single page applications with angular',
      image: courseAngular,
      rating: '5.00 (328)',
      lessons: '6',
      enrolled: '12k',
      price: 'Free',
    },
  ),
  'grow-your-brand-and-reach-your-audience': course(
    'grow-your-brand-and-reach-your-audience',
    {
      category: 'Management',
      title: 'Grow your brand and reach your audience',
      image: courseBrand,
      rating: '4.88 (210)',
      lessons: '10',
      enrolled: '8k',
      price: '$49',
    },
  ),
  'the-complete-guide-to-personal-and-business-finance': course(
    'the-complete-guide-to-personal-and-business-finance',
    {
      category: 'Finance',
      title: 'The complete guide to personal and business finance',
      image: courseFinance,
      rating: '4.88 (210)',
      lessons: '10',
      enrolled: '8k',
      price: '$99',
    },
  ),
}

export const courseTabs = [
  {
    id: 'all',
    label: 'All courses',
    courses: [
      'crisis-management-and-problem-solving-strategies',
      'advanced-photoshop-techniques-for-designers',
      'operations-management-and-process-improvement',
      'database-integration-with-mongodb',
      'risk-management-and-business-continuity',
      'full-stack-development-with-the-mern-stack',
    ],
  },
  {
    id: 'design',
    label: 'Design',
    courses: [
      'design-systems-and-pattern-libraries',
      'learn-interactive-web-design-by-building-real-projects',
      'advanced-photoshop-techniques-for-designers',
    ],
  },
  {
    id: 'development',
    label: 'Development',
    courses: [
      'building-single-page-applications-with-angular',
      'database-integration-with-mongodb',
      'full-stack-development-with-the-mern-stack',
    ],
  },
  {
    id: 'management',
    label: 'Management',
    courses: [
      'risk-management-and-business-continuity',
      'grow-your-brand-and-reach-your-audience',
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    courses: [
      'operations-management-and-process-improvement',
      'the-complete-guide-to-personal-and-business-finance',
    ],
  },
]

export const trendingCourseSlugs = [
  'building-single-page-applications-with-angular',
  'database-integration-with-mongodb',
  'risk-management-and-business-continuity',
  'full-stack-development-with-the-mern-stack',
]
