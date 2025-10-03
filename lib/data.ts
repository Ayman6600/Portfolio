import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'aymanshilledar82@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi [Your Name], I am reaching out to you because...',

    oldPortfolio: 'https://your-old-portfolio-url.com',
    upworkProfile: 'https://www.upwork.com/freelancers/your-profile',
};

export const SOCIAL_LINKS = [
    { name: 'Github', url: 'https://shorturl.at/LS2X5' },
    { name: 'Linkedin', url: 'https://shorturl.at/KVoJo' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'HTML5',
            icon: '/logo/Html.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'PYTHON',
            icon: '/logo/python.png',
        },

        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NextJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Securepass-Password',
        slug: 'securepass-password',
        liveUrl: 'securepass-zeta.vercel.app/login',
        year: 2024,
        description: `
      In today's digital age, managing passwords securely is more critical than ever. I'm thrilled to share SecurePass, a full-stack web application developed using the MERN <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>Backend: Implemented AES encryption and configured MongoDB Atlas for scalable cloud storage.</li>
        <li>✍️ 🎨 Frontend: Built reactive UI components with React.js and optimized responsiveness</li>
        <li>🔄 State Management: Implemented CRUD functionalities with secure client-side caching</li>
        <li>🖥️ Security: Ensured on-demand, secure password decryption without compromising data</li>
        <li>⚡ F🚀 Deployment: Configured continuous deployment pipeline on Vercel for smooth production delivery.</li>
       <li> Third-Party Integration: Leveraged MongoDB Atlas and React Hook Form for functionality and UI handling.<li/>

      </ul><br/>
      
      `,
        techStack: [
            'MongoDB Atlas',
            'Express.js',
            'React.js',
            'Node.js',
            'AES Encryption',
            'Vercel',
        ],
        role: `
      Full-Stack Developer <br/>
      <li>✅ Backend: Implemented AES encryption and configured MongoDB Atlas for scalable cloud storage.</li> <li>🎨 Frontend: Built reactive UI components with React.js and optimized responsiveness.</li> <li>🔄 State Management: Implemented CRUD functionalities with secure client-side caching.</li> <li>🖥️ Security: Ensured on-demand, secure password decryption without compromising data.</li> <li>🚀 Deployment: Configured continuous deployment pipeline on Vercel for smooth production delivery.</li> <li>🧩 Third-Party Integration: Leveraged MongoDB Atlas and React Hook Form for functionality and UI handling.</li> </ul> 
      
      `,

        thumbnail: '/projects/thumbnail/secure_1.png',
        longThumbnail: '/projects/long/secure_1.png',
        images: [
            '/projects/images/secure_1.png',
            '/projects/images/secure_2.png',
            '/projects/images/secure_password.jpeg',
        ],
    },
    {
        title: 'Weather-app',
        slug: 'Weather-app',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/weather-app.png',
        longThumbnail: '/projects/long/weather-app.png',
        images: ['/projects/images/weather-app.png'],
        liveUrl: 'https://weather-c8x9plqwc-ayman6600s-projects.vercel.app/',
        year: 2023,
        description: `WeatherPro is an advanced real-time weather forecasting app designed for seamless and interactive user experience. It features location-based searches, quick-access city buttons, detailed 7-day forecasts with dynamic icons, and live weather animations. The app also includes comprehensive weather statistics, sunrise and sunset times, and a theme toggle with auto-saving preferences, ensuring usability and engagement across devices.

`,
        role: `ABuilt the app using HTML, CSS, and JavaScript with integration of OpenWeatherMap API for real-time data.

Implemented asynchronous JavaScript (fetch/async-await) for efficient data handling and auto-refresh every 10 minutes.

Designed a modern, responsive UI with aesthetic gradients, live rain and snow animations, and dark/light mode toggle.

Developed location search by city name or coordinates and quick-access buttons for major cities to enhance user convenience.`,
    },

    {
        title: 'Code-rev',
        slug: 'Code-rev',
        techStack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB ,'],
        thumbnail: '/projects/thumbnail/code.png',
        longThumbnail: '/projects/long/code.png',
        images: [
            '/projects/images/code.png',
            '/projects/images/main.png',
            '/projects/images/workspace.png',
        ],
        liveUrl: '',
        year: 2025,
        description: `CodeRev is a lightweight, AI-assisted code editor designed to empower developers with real-time multi-user collaboration and advanced AI-driven features. Built with a secure and intuitive workspace, CodeRev not only supports live code editing and file management but also enhances productivity with AI-powered linting, auto-completion, documentation generation, and syntax correction.`,
        role: `Core Development: Work on building and maintaining the lightweight code editor with real-time synchronization, multi-user collaboration, and secure file management.

AI Integration: Design and integrate advanced AI features such as linting, code auto-completion, syntax correction, and documentation generation to boost developer productivity.

Collaboration Tools: Implement scalable systems for live editing, conflict resolution, version tracking, and secure multi-user sessions.

Performance Optimization: Ensure smooth and responsive editing experiences, handling large codebases efficiently.

Security & Reliability: Develop secure authentication, data privacy measures, and reliable backup systems to protect code and user data.

User Experience: Focus on creating an intuitive, distraction-free workspace that developers find comfortable and easy to use.

Continuous Innovation: Research emerging AI models and developer tool trends to keep evolving CodeRev as a modern development platform.`,
    },
    {
        title: 'Real_time-tracker',
        slug: 'real-time-tracker',
        liveUrl: 'real-time-tracker-vert.vercel.app',
        year: 2024,
        description: `
        🚀 Features:<br/><br/>
        <ul>
          <li>📍 Real-time Location Sharing: Share your location with friends in real-time</li>
          <li>👥 Simple Friend System: Easy friend connection using codes</li>
          <li>🔢 Live User Counter: See how many users are online and sharing location</li>
          <li>🎨 Clean Interface: Simple, user-friendly design</li>
          <li>📱 Mobile Friendly: Works on both desktop and mobile devices</li>
          <li>🔔 Geofencing Alerts: Create virtual boundaries and get notified when you enter or exit them</li>
          <li>🛣️ Route Tracking: See movement paths as blue lines on the map (like Uber)</li>
          <li>🌍 Worldwide Tracking: Track users anywhere in the world with global view options</li>
        </ul><br/>
        `,
        techStack: [
            'Next.js',
            'TypeScript',
            'Node.js',
            'Socket.IO',
            'MongoDB',
            'Mapbox',
            'Tailwind CSS',
        ],
        role: `
        Full-Stack Developer<br/>
        <ul>
          <li>✅ Developed real-time location sharing using WebSocket technology</li>
          <li>🗺️ Integrated mapping solutions with real-time tracking capabilities</li>
          <li>👥 Built friend connection system with unique invite codes</li>
          <li>🔔 Implemented geofencing alerts using geospatial queries</li>
          <li>📱 Ensured responsive design for both mobile and desktop experiences</li>
          <li>🔒 Secured user data with proper authentication and authorization</li>
          <li>🚀 Deployed application on Vercel with optimized performance</li>
        </ul>
        `,
        thumbnail: '/projects/thumbnail/Real-time Tracker.png',
        longThumbnail: '/projects/long/Real-time Tracker.png',
        images: ['/projects/images/Real-time Tracker.png'],
    },
];
