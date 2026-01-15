import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Tung',
    lastName:  'Mai',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Ho_Chi_Minh',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Vietnamese', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/tungmt',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:me@tungmt.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full Stack Developer</>,
    subline: <>I'm Tung , a Freelancer Full Stack Developer, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Tung is a Hanoi-based full stack developer with a passion for creating innovative web and mobile applications. With a strong foundation in both front-end and back-end technologies, Tung excels at building seamless user experiences and robust functionality. When not coding, Tung enjoys exploring the latest tech trends and contributing to open-source projects.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelancer',
                timeframe: '2014 - Present',
                role: 'Expert Full Stack Developer',
                achievements: [
                    <>Spearheaded the development of a scalable e-commerce platform that increased user engagement by 30%.;Implemented a microservices architecture that improved system reliability and reduced downtime by 25%.</>
                ],
                images: [
                ]
            },
            {
                company: 'Kuky',
                timeframe: '2024 - 2025',
                role: 'Full Stack Developer',
                achievements: [
                    <>Successfully launch the Kuky app on both iOS and Android platforms</>
                ],
                images: [ ]
            },
            {
                company: 'Emddi',
                timeframe: '2022 - 2022',
                role: 'Mobile Team Lead',
                achievements: [
                    <>Lead a mobile development team to optimize Emddi app</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Hanoi University of Science and Technology',
                description: <>Studied computer science.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'React-Native',
                description: <>Building cross-platform mobile apps with React-Native.</>,
                images: [
                ]
            },
            {
                title: 'Backend',
                description: <>Experience with Node.js, Django, Nextjs for server-side development.</>,
                images: [
                ]
            },
            {
                title: 'Frontend',
                description: <>Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js.</>,
                images: [
                ]
            },
            {
                title: 'IOT',
                description: <>nowledge of IoT protocols and platforms for connected devices.</>,
                images: [
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };