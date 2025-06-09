const navLinks = [
  {
    name: "Personal",
    link: "#personal",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/tm.png",
  },
  {
    imgPath: "/images/logos/mnrb.png",
  },
  {
    imgPath: "/images/logos/tm.png",
  },
  {
    imgPath: "/images/logos/mnrb.png",
  },
  {
    imgPath: "/images/logos/tm.png",
  },
  {
    imgPath: "/images/logos/mnrb.png",
  },
  {
    imgPath: "/images/logos/tm.png",
  },
  {
    imgPath: "/images/logos/mnrb.png",
  },
  {
    imgPath: "/images/logos/tm.png",
  },
  {
    imgPath: "/images/logos/mnrb.png",
  },
  {
    imgPath: "/images/logos/tm.png",
  },
  {
    imgPath: "/images/logos/mnrb.png",
  },
];

const personals = [
  {
    title: "💻 Profession",
    desc: "Software Developer 👨🏻‍💻",
  },
  {
    title: "📍 Based In",
    desc: "Cyberjaya, MY 🇲🇾",
  },
  {
    title: "🌟 Interests",
    desc: "Football, Futsal, Running 🏃",
  },
  {
    title: "🔴 Club Support",
    desc: "Die-hard Manchester United fan ⚽",
  },
  {
    title: "🧠 Mindset",
    desc: "Always learning, always building 🚀",
  },
  {
    title: "🤓 Fun Fact",
    desc: "CR7 admirer since day one 🐐",
  },
];

const abilities = [
  {
    imgPath: "🎨 🧠",
    title: "Creative Engineering",
    desc: "Blending design thinking with front-end code to build visually stunning and intuitive user experiences.",
  },
  {
    imgPath: "🖥️ 🔌 ",
    title: "Backend Ready",
    desc: "Building robust backend systems using Express.js, REST APIs, and integrating seamlessly with full-stack workflows.",
  },
  {
    imgPath: "🛠️ 🔍",
    title: "Tech & Detail Driven",
    desc: "Combining deep technical skills with meticulous attention to detail across React, Angular, Tailwind, and performance testing.",
  },
  {
    imgPath: "🧠 🖼️",
    title: "Visual Web Tools",
    desc: "Skilled in Framer and Wix to rapidly prototype and build beautiful, responsive websites with a strong design foundation.",
  },
  {
    imgPath: "📚 ⚙️",
    title: "Always Evolving",
    desc: "Continuously learning and applying new tools, frameworks, and best practices to sharpen both frontend and backend skills.",
  },
  {
    imgPath: "🤝 🧑‍💻",
    title: "Reliable & Independent",
    desc: "Taking full ownership of tasks and delivering clean, scalable solutions — whether solo or in collaboration.",
  }
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Angular Developer",
    modelPath: "/models/angular-transformed.glb",
    scale: 3.0,
    rotation: [Math.PI / 1, -Math.PI / 8, Math.PI],
    position: [2, 0, 0]
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Aiman demonstrated a strong grasp of testing methodologies and front-end design. His contribution to performance testing and UI development greatly improved our testing workflows.",
    imgPath: "/images/logos/tm.png",
    logoPath: "/images/logos/tm.png",
    title: "Software Engineer Intern",
    date: "2023",
    responsibilities: [
      "Conducted performance testing under various load scenarios to assess system efficiency.",
      "Executed manual testing for rigorous system validation and UX evaluation.",
      "Designed user interfaces for SQA Mobile and SQA PT Mobile applications.",
      "Developed the frontend for the SQA PT portal, streamlining performance testing workflows.",
      "Performed network testing to analyze and enhance computer network performance.",
    ],
  },
  {
    review: "Aiman was instrumental in building a responsive and user-friendly portal for Takaful Ikhlas. His attention to detail and ability to deliver features end-to-end stood out.",
    imgPath: "/images/logos/mnrb.png",
    logoPath: "/images/logos/mnrb.png",
    title: "Frontend Developer",
    date: "2023 – 2024",
    responsibilities: [
      "Developed the Customer Portal for Takaful Ikhlas with a focus on usability and accessibility.",
      "Implemented key features such as account registration, login, dashboard, and certificate management.",
      "Handled document downloads, claim submissions, and announcement modules.",
      "Built customer support features to enhance communication and assistance.",
    ],
  },
  {
    review: "Aiman consistently delivers high-quality code and design. His frontend expertise helped shape the eHealth portal into a scalable and intuitive platform.",
    imgPath: "/images/logos/tm.png",
    logoPath: "/images/logos/tm.png",
    title: "Frontend Developer",
    date: "2024 – Present",
    responsibilities: [
      "Designed and implemented a secure login flow using Keycloak for user authentication.",
      "Built a comprehensive analytics dashboard with data visualizations for administrators.",
      "Developed a responsive and intuitive web portal for users to access eHealth services.",
      "Deployed the portal using Docker, ensuring scalable and efficient delivery.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ts. Dr. Sufri Muhammad",
    mentions: "UPM, Malaysia",
    review:
      "Supervising Mr. Aiman in his project was relatively straightforward, as he effectively managed tasks and engaged with stakeholders independently. He successfully delivered each task and even secured a copyright with MyIPO for his project. I am confident that he will continue to achieve more in the future.",
    imgPath: "/images/sufri.png",
  },
  {
    name: "Takaful Ikhlas",
    mentions: "MNRB, Malaysia",
    review:
      "Aiman demonstrated strong ownership and technical skills while contributing to the Go Serve Portal project. His ability to implement user-friendly features and optimize portal performance significantly enhanced the platform's usability for both customers and agents. The collaboration was smooth, and his dedication to quality was evident throughout.",
    imgPath: "/images/ti.png",
  },
  {
    name: "Nawawi Bakhtir",
    mentions: "Cyberjaya, Malaysia",
    review:
      "Aiman's artistic prowess and technical finesse elevated our website into a visually captivating platform.",
    imgPath: "/images/nawawi.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/aimanhakimcy/"
  },
  {
    name: "KDX",
    imgPath: "/images/kdx.png",
  },
];

export {
  words,
  abilities,
  personals,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};