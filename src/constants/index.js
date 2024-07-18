import project1 from "../assets/assets/projects/project-1.jpg";
import project2 from "../assets/assets/projects/project-2.jpeg";
import project3 from "../assets/assets/projects/project-3.jpeg";
import project4 from "../assets/assets/projects/project-4.jpeg";
import project5 from "../assets/assets/projects/project-5.jpeg";
import project6 from "../assets/assets/projects/food.jpeg";
import project7 from "../assets/assets/projects/project-7.jpg"; 



export const HERO_CONTENT = `Aspiring and highly motivated IT undergraduate trainee pursuing a degree in Information Technology, with a strong foundation in web development, mobile app development, and database management. Adept at problem-solving, collaborating in team environments, and eager to apply theoretical knowledge to real-world challenges. Passionate about continuously learning new technologies and improving technical skills to contribute effectively to innovative projects. Seeking an opportunity to leverage academic knowledge and hands-on experience in a dynamic and growth-oriented organization.`;

export const ABOUT_TEXT = `Hello! I am a third-year undergraduate student at the Sri Lanka Institute of Information Technology, pursuing a degree in Information Technology. With a passion for technology and innovation, I am dedicated to developing my skills and knowledge in the field. My academic journey has equipped me with a strong foundation in various aspects of IT, and I am excited to apply this knowledge in practical, real-world projects. I am eager to connect with like-minded professionals and explore opportunities to contribute to the ever-evolving tech industry.

`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
 
// ];

export const PROJECTS = [
  {
    title: "Landlord Profile Management System",
    image: project1,
    description:
      "A feature within a comprehensive Property Management System project that enables efficient management of landlord profiles through CRUD operations.",
    plink:"https://github.com/dulmiwitharana/propertymanagement_landlord.git",
    technologies: ["My Sql", "Java", "CSS"],
},

  {
    title: "Tourism Management System",
    image: project2,
    description:
      "Tourism Insurance Management function with CRUD operations, calculating insurance payment amounts, and generating insurance payment receipts.",
    plink:"https://github.com/dulmiwitharana/ITP-insurance.git",
    technologies: ["MongoDB", "Express", "React.js", "Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    plink:"https://github.com/dulmiwitharana/Portfolio.git",
    technologies: ["HTML", "TailwindCSS", "React"],
  },
  {
    title: "WordWise Dictionary Website",
    image: project7,
    description:
      "Developed the WordWise dictionary website allowing users to find word meanings and examples, with a read-aloud feature for pronunciation assistance.",
    plink:"https://github.com/dulmiwitharana/Dictionary-Web.git",
    technologies: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "Taste Treasures Food Recipe Website",
    image: project6,
    description:
      "Developed the TasteTreasures food recipe system enabling users to register, log in, add recipes and saving and viewing favorite recipes.",
    plink:"https://github.com/dulmiwitharana/Recipe-Web-App-MERN.git",
    technologies: ["MongoDB", "Express.js", "Node.js", "React.js"],
  },
  {
    title: "SNAKE Game App",
    image: project4,
    description:
      "Developed a classic SNAKE game using Kotlin in Android Studio featuring snake growth with meat consumption, a game over screen displaying scores, and increasing speed for added challenge.",
    plink:"https://github.com/dulmiwitharana/Snake-Game-Kotlin.git",
    technologies: ["Kotlin", "Android Studio"],
  },
  {
    title: "NOTEMASTER Note App",
    image: project5,
    description:
      "A versatile note-taking app with features like adding new notes, displaying all notes, deleting notes, and editing notes.",
    plink:"https://github.com/dulmiwitharana/NoteApp-Kotlin.git",  
    technologies: ["Kotlin", "Android Studio"],
  },
];

export const CONTACT = {
  name :"Dulmi Hirunika Witharana",
  address: "'Eshini',Kapugama-West , Devinuwara ",
  phoneNo: "070 310 5407 ",
  email: "dulmiwitharana@gmail.com",

};
