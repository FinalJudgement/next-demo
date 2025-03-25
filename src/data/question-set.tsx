// question-set.tsx
interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface Quiz {
  questions: Question[];
}

export const quiz: Quiz = {
	 questions: [
		{
		  id: 1,
		  question: 'What is the primary purpose of Next.js?',
		  answers: [
			'To replace React as a front-end framework',
			'To build native mobile apps with React',
			'To enhance React with powerful tools for modern web development',
			'To create RESTful APIs using React',
		  ],
		  correctAnswer: 'To enhance React with powerful tools for modern web development',
		},
		{
		  id: 2,
		  question: 'Which company created Next.js?',
		  answers: ['Meta', 'Vercel', 'Google', 'Netlify'],
		  correctAnswer: 'Vercel',
		},
		{
		  id: 3,
		  question: 'What is one way Next.js helps improve developer onboarding?',
		  answers: [
			'By removing the need to use JavaScript',
			'Through an intuitive and predictable project structure',
			'By requiring fewer code comments',
			'Through built-in artificial intelligence',
		  ],
		  correctAnswer: 'Through an intuitive and predictable project structure',
		},
		{
		  id: 4,
		  question: 'What does Client-Side Rendering (CSR) do in a Next.js app?',
		  answers: [
			'Sends fully rendered HTML on each request',
			'Uses JavaScript in the browser to render content',
			'Builds pages during deployment',
			'Removes interactivity from the page',
		  ],
		  correctAnswer: 'Uses JavaScript in the browser to render content',
		},
		{
		  id: 5,
		  question: 'What makes Static Site Generation (SSG) a good option for performance?',
		  answers: [
			'It builds pages on every user visit',
			'It avoids caching entirely',
			'It pre-generates HTML at build time',
			'It requires a live database for every page load',
		  ],
		  correctAnswer: 'It pre-generates HTML at build time',
		},
		{
		  id: 6,
		  question: 'Why is Incremental Static Regeneration (ISR) useful?',
		  answers: [
			'It allows pages to update in the background after deployment',
			'It turns off JavaScript completely',
			'It fetches data from third-party APIs only',
			'It works only for mobile users',
		  ],
		  correctAnswer: 'It allows pages to update in the background after deployment',
		},
		{
		  id: 7,
		  question: 'What’s the benefit of using multiple rendering strategies in a single Next.js app?',
		  answers: [
			'It reduces React version mismatches',
			'It improves SEO and performance by tailoring each page to its needs',
			'It disables unnecessary routing features',
			'It prevents hydration errors entirely',
		  ],
		  correctAnswer: 'It improves SEO and performance by tailoring each page to its needs',
		},
		{
		  id: 8,
		  question: 'What is Fast Refresh designed to do during development?',
		  answers: [
			'Auto-deploy changes to production',
			'Show updates instantly while preserving component state',
			'Remove all console errors',
			'Restart the server on every code change',
		  ],
		  correctAnswer: 'Show updates instantly while preserving component state',
		},
		{
		  id: 9,
		  question: 'What full-stack feature does Next.js support with its API routes?',
		  answers: [
			'Hosting images from a CDN',
			'Direct backend functionality inside the application',
			'Third-party package replacement',
			'Serverless database hosting',
		  ],
		  correctAnswer: 'Direct backend functionality inside the application',
		},
		{
		  id: 10,
		  question: 'What is one advantage of using Next.js as a full-stack framework?',
		  answers: [
			'It requires two separate codebases',
			'It uses Java instead of JavaScript',
			'It unifies frontend and backend logic in a single project',
			'It removes the need for deployment',
		  ],
		  correctAnswer: 'It unifies frontend and backend logic in a single project',
		},
		{
		  id: 11,
		  question: 'How does Next.js image optimization help user experience?',
		  answers: [
			'It disables large images automatically',
			'It lazily loads images and prevents layout shifts',
			'It forces all images to be square',
			'It removes all animations',
		  ],
		  correctAnswer: 'It lazily loads images and prevents layout shifts',
		},
		{
		  id: 12,
		  question: 'What does font optimization in Next.js help prevent?',
		  answers: [
			'Syntax errors',
			'Layout shift during font loading',
			'JavaScript errors in CSS',
			'Slow database queries',
		  ],
		  correctAnswer: 'Layout shift during font loading',
		},
		{
		  id: 13,
		  question: 'What is Tailwind CSS mainly used for in a Next.js app?',
		  answers: [
			'Database connections',
			'Serverless API creation',
			'Utility-first styling and responsive design',
			'Creating backend logic',
		  ],
		  correctAnswer: 'Utility-first styling and responsive design',
		},
		{
		  id: 14,
		  question: 'What is one benefit of using UI libraries like shadcn/ui or Telerik UI with Next.js?',
		  answers: [
			'They replace routing logic',
			'They offer ready-to-use, customizable components',
			'They turn off JavaScript',
			'They make all styling automatic',
		  ],
		  correctAnswer: 'They offer ready-to-use, customizable components',
		},
		{
		  id: 15,
		  question: 'Which platform is officially optimized for deploying Next.js apps?',
		  answers: ['Vercel', 'Firebase', 'Netlify', 'AWS Lambda'],
		  correctAnswer: 'Vercel',
		},
	  ],
};
