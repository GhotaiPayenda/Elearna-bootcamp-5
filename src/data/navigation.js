const coursePath = (slug) => `/courses/${slug}`

export const courseMega = {
  free: [
    {
      heading: 'Finance',
      links: [
        {
          label: 'Understanding corporate finance and investments',
          to: coursePath('understanding-corporate-finance-and-investments'),
        },
      ],
    },
    {
      heading: 'Design',
      links: [
        {
          label: 'Advanced photoshop techniques for designers',
          to: coursePath('advanced-photoshop-techniques-for-designers'),
        },
      ],
    },
    {
      heading: 'Management',
      links: [
        {
          label: 'Crisis management and problem-solving strategies',
          to: coursePath('crisis-management-and-problem-solving-strategies'),
        },
      ],
    },
    {
      heading: 'Development',
      links: [
        {
          label: 'Building single page applications with angular',
          to: coursePath('building-single-page-applications-with-angular'),
        },
      ],
    },
  ],
  paid: [
    {
      heading: 'Finance',
      links: [
        {
          label: 'The complete guide to personal and business finance',
          to: coursePath('the-complete-guide-to-personal-and-business-finance'),
        },
        {
          label: 'Operations management and process improvement',
          to: coursePath('operations-management-and-process-improvement'),
        },
      ],
    },
    {
      heading: 'Design',
      links: [
        {
          label: 'Learn interactive Web Design by building real projects',
          to: coursePath('learn-interactive-web-design-by-building-real-projects'),
        },
        {
          label: 'Design systems and pattern libraries',
          to: coursePath('design-systems-and-pattern-libraries'),
        },
      ],
    },
    {
      heading: 'Management',
      links: [
        {
          label: 'Grow your brand and reach your audience',
          to: coursePath('grow-your-brand-and-reach-your-audience'),
        },
        {
          label: 'Risk management and business continuity',
          to: coursePath('risk-management-and-business-continuity'),
        },
      ],
    },
    {
      heading: 'Development',
      links: [
        {
          label: 'Database integration with MongoDB',
          to: coursePath('database-integration-with-mongodb'),
        },
        {
          label: 'Full-stack development with the MERN stack',
          to: coursePath('full-stack-development-with-the-mern-stack'),
        },
      ],
    },
  ],
}

export const mobileCourses = [
  {
    label: 'Free',
    links: [
      {
        label: 'Corporate Finance And Investments',
        to: coursePath('understanding-corporate-finance-and-investments'),
      },
      {
        label: 'Advanced Photoshop Techniques',
        to: coursePath('advanced-photoshop-techniques-for-designers'),
      },
      {
        label: 'Crisis Management',
        to: coursePath('crisis-management-and-problem-solving-strategies'),
      },
      {
        label: 'Single Page Applications With Angular',
        to: coursePath('building-single-page-applications-with-angular'),
      },
    ],
  },
  {
    label: 'Paid',
    links: [
      {
        label: 'Personal And Business Finance',
        to: coursePath('the-complete-guide-to-personal-and-business-finance'),
      },
      {
        label: 'Management And Process Improvement',
        to: coursePath('operations-management-and-process-improvement'),
      },
      {
        label: 'Interactive Web Design',
        to: coursePath('learn-interactive-web-design-by-building-real-projects'),
      },
      {
        label: 'Design Systems And Pattern Libraries',
        to: coursePath('design-systems-and-pattern-libraries'),
      },
      {
        label: 'Grow Your Brand And Reach Your Audience',
        to: coursePath('grow-your-brand-and-reach-your-audience'),
      },
      {
        label: 'Risk Management',
        to: coursePath('risk-management-and-business-continuity'),
      },
      {
        label: 'Database Integration With MongoDB',
        to: coursePath('database-integration-with-mongodb'),
      },
      {
        label: 'Full-Stack Development with MERN Stack',
        to: coursePath('full-stack-development-with-the-mern-stack'),
      },
    ],
  },
]

export const desktopNav = [
  {
    label: 'Home',
    links: [
      { label: 'Home One', to: '/home-one' },
      { label: 'Home Two', to: '/home-two' },
      { label: 'Home Three', to: '/home-three' },
    ],
  },
  { label: 'Courses', mega: true },
  {
    label: 'Pages',
    links: [
      { label: 'About One', to: '/about-one' },
      { label: 'About Two', to: '/about-two' },
      { label: 'Course One', to: '/course-one' },
      { label: 'Course Two', to: '/course-two' },
      { label: 'Course Three', to: '/course-three' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Pricing One', to: '/pricing-one' },
      { label: 'Pricing Two', to: '/pricing-two' },
      { label: 'Pricing Three', to: '/pricing-three' },
      { label: 'Career', to: '/career' },
      { label: 'Events', to: '/events' },
      { label: 'Team', to: '/team' },
    ],
  },
  {
    label: 'Blog',
    links: [
      { label: 'Blog One', to: '/blog-one' },
      { label: 'Blog Two', to: '/blog-two' },
      { label: 'Blog Three', to: '/blog-three' },
    ],
  },
  {
    label: 'Contact',
    links: [
      { label: 'Contact One', to: '/contact-one' },
      { label: 'Contact Two', to: '/contact-two' },
      { label: 'Contact Three', to: '/contact-three' },
    ],
  },
]

const pathSet = new Set(['/login', '/sign-up', '/cart', '/career'])

desktopNav.forEach((item) => {
  item.links?.forEach((link) => pathSet.add(link.to))
})

Object.values(courseMega).forEach((group) => {
  group.forEach((column) => {
    column.links.forEach((link) => pathSet.add(link.to))
  })
})

pathSet.delete('/home-one')

export const placeholderPaths = [...pathSet]
