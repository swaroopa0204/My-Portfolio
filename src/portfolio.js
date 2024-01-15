/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Swaroopa Neravati",
  title: "Hi all, I'm Swaroopa",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1c6xUOzITSXO3Z_BfjFWBHV0TJz1x7LbL/edit?usp=sharing&ouid=117609714018131996711&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/swaroopa0204",
  linkedin: "https://www.linkedin.com/in/swaroopaneravati/",
  gmail: "swaroopaneravati22@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Texas A&M University",
      logo: require("./assets/images/texas a&m logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - December 2023",
      desc: "Completed thesis work using machine learning and data mining techniques",
      descBullets: [
        "A Hybrid Model For Fraud Detection Using Classification and Anomaly Detection Techniques.",
        "In my thesis project, titled A Hybrid Model For Fraud Detection Using Classification and Anomaly Detection Techniques, I explored innovative approaches to enhance fraud detection accuracy. The project involved the development of a hybrid model that integrates classification and anomaly detection methods, implemented using Python on Google Collab for efficient processing. The model demonstrated improved performance through rigorous evaluation, showcasing its potential to address evolving fraud challenges across diverse domains. This research not only underscores my academic achievements but also highlights my proficiency in utilizing advanced technologies to tackle real-world problems, emphasizing my analytical and problem-solving skills in the realm of fraud detection."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst & Web developer",
      company: "Texas A&M University",
      companylogo: require("./assets/images/texas a&m logo.png"),
      date: "January 2023 to December 2023",
      desc: "Developed and published a website for the industrial engineering department using HTML, CSS, and ReactJS, featuring embedded Tableau workbooks for data visualization. Implemented web forms, email subscription features, and ongoing maintenance, making the site accessible to students and professionals nationwide for assistance in the field and evaluation of energy data."
    },
    {
      role: "Senior Software Engineer",
      company: "Valuelabs",
      companylogo: require("./assets/images/Valuelabs.png"),
      date: "April 2020 – July 2022",
      desc: "I've designed and developed impactful web applications using Angular, ReactJS, and Java, driving a 20% increase in user engagement and a 15% revenue boost. Specializing in frontend development, I reduced page load time by 25% through single-page applications with lazy loading and Jest testing. In ReactJS, I achieved a 40% reduction in code duplication using Redux and React-Hooks, enhancing overall code efficiency by 25%. My expertise extends to Angular development, database technologies (MySQL, Oracle, Cassandra, MongoDB), and backend solutions with Java and Spring Boot, AWS, docker contributing to scalable, high-performance systems."
    },
    {
      role: "Software Engineer Intern",
      company: "Valuelabs",
      companylogo: require("./assets/images/Valuelabs.png"),
      date: "December 2019 - March 2020",
      desc: "Contributed to developing software components using languages such as Java, Python, and JavaScript, along with technologies like Angular and React. Used agile methodologies to ensure efficient project management, Worked closely with team members to identify project requirements and develop detailed plans and timelines."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


// Achievement Section
// Include certificates, talks etc

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (945)-244-6660",
  email_address: "swaroopaneravati22@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
  isHireable
};
