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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Ronald Diaz",
  title: "Hi all, I'm Ronald",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building applications and platforms with cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/11rle78nDPFRpG5BcT-_jGcUOKrC-R5w4?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ronaldidro",
  linkedin: "https://www.linkedin.com/in/ronaldidro/",
  gmail: "rondiazidro@gmail.com",
  whatsapp: "https://wa.me/51990148740",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I craft highly interactive frontends and user interfaces that ensure seamless experiences across applications and platforms."
    ),
    emoji(
      "⚡ I build robust, high-performance backend services designed to power your digital products with top-tier security and scalability."
    ),
    emoji(
      "⚡ I architect and manage cloud infrastructure leveraging DevOps practices to ensure fast, reliable, and scalable deployments."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "far fa-gem"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "spring boot",
      fontAwesomeClassname: "fas fa-power-off"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "github actions",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "devops",
      fontAwesomeClassname: "fas fa-infinity"
    },
    {
      skillName: "google cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "mongo",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "sql database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "ai",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pedro Ruiz Gallo National University",
      logo: require("./assets/images/unprgLogo.png"),
      subHeader: "Systems engineering",
      duration: "Aug. 2012 - Feb. 2017",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps/Cloud",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software development services consultant",
      company: "Freelance",
      companylogo: require("./assets/images/freelanceLogo.jpg"),
      date: "Oct. 2021 – Present",
      desc: ""
    },
    {
      role: "Digital Services Development Specialist",
      company: "SGTD - PCM",
      companylogo: require("./assets/images/pcmLogo.png"),
      date: "Jun. 2023 – Mar. 2025",
      desc: "",
      descBullets: []
    },
    {
      role: "Programmer analyst",
      company: "IDE Solution",
      companylogo: require("./assets/images/ideLogo.png"),
      date: "Jun. 2017 – Sep. 2021",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Latest courses and skills achieved 🏆 "),
  subtitle: "",
  achievementsCards: [
    {
      title: "NestJs + Microservicios",
      subtitle: "DevTalles",
      image: require("./assets/images/nestCourseLogo.png"),
      imageAlt: "Typescript course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://cursos.devtalles.com/certificates/oqs9yv1jxx"
        }
      ]
    },
    {
      title: "DevOps with Kubernetes",
      subtitle: "University of Helsinki",
      image: require("./assets/images/k8sCourseLogo.png"),
      imageAlt: "K8S course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://courses.mooc.fi/certificates/validate/wx5e457um3xifce"
        }
      ]
    },
    {
      title: "DevOps with Docker: Security and optimization",
      subtitle: "University of Helsinki",
      image: require("./assets/images/dockerCourseLogo.webp"),
      imageAlt: "Docker course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://courses.mooc.fi/certificates/validate/d38t98r6prqynit"
        }
      ]
    },
    {
      title: "Angular de cero a experto",
      subtitle: "DevTalles",
      image: require("./assets/images/angularCourseLogo.jpg"),
      imageAlt: "Angular course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-2ef19cc2-71b2-4580-9bf1-e26ee81fa0c2.pdf"
        }
      ]
    },
    {
      title: "Java Programming",
      subtitle: "University of Helsinki",
      image: require("./assets/images/javaCourseLogo.webp"),
      imageAlt: "Java course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://certificates.mooc.fi/validate/y8jyik6id6a"
        }
      ]
    },
    {
      title: "Advanced course in programming",
      subtitle: "University of Helsinki",
      image: require("./assets/images/pythonCourseLogo.png"),
      imageAlt: "Python course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://certificates.mooc.fi/validate/eg8zbo0cg8a"
        }
      ]
    },
    {
      title: "Server Side Web Development Ruby on Rails",
      subtitle: "University of Helsinki",
      image: require("./assets/images/railsCourseLogo.png"),
      imageAlt: "RoR course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/rails2023/en/6906332b7e74a6b0573ab11b85515764"
        }
      ]
    },
    {
      title: "Full Stack Open React Native",
      subtitle: "University of Helsinki",
      image: require("./assets/images/nativeCourseLogo.png"),
      imageAlt: "React native course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/1d18b58a8d1a7ed8c0e87424fd28784e"
        }
      ]
    },
    {
      title: "Front End Development Libraries",
      subtitle: "freeCodeCamp",
      image: require("./assets/images/frontendCourseLogo.webp"),
      imageAlt: "Frontend course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.freecodecamp.org/certification/fcc3712fdc5-af46-453a-be8a-7d711de3188a/front-end-development-libraries"
        }
      ]
    },
    {
      title: "Back End Development and Apis",
      subtitle: "freeCodeCamp",
      image: require("./assets/images/backendCourseLogo.jpg"),
      imageAlt: "Backend course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.freecodecamp.org/certification/fcc3712fdc5-af46-453a-be8a-7d711de3188a/back-end-development-and-apis"
        }
      ]
    },
    {
      title: "Full Stack Open CI/CD",
      subtitle: "University of Helsinki",
      image: require("./assets/images/cicdCourseLogo.webp"),
      imageAlt: "Cicd course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/f45a763adcf0bbd81f5164d98d401049"
        }
      ]
    },
    {
      title: "Full Stack Open Relational Databases",
      subtitle: "University of Helsinki",
      image: require("./assets/images/databaseCourseLogo.png"),
      imageAlt: "Databases course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/f41c59af102b1970537a86cd0dfa0c3a"
        }
      ]
    },
    {
      title: "Full Stack Open GraphQL",
      subtitle: "University of Helsinki",
      image: require("./assets/images/graphqlCourseLogo.png"),
      imageAlt: "GraphQL course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/d9b01e2a2f67b3057392711a4fb109e2"
        }
      ]
    },
    {
      title: "Full Stack Open",
      subtitle: "University of Helsinki",
      image: require("./assets/images/fsoCourseLogo.webp"),
      imageAlt: "FSO course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/6e4cf64d32ad04e38f0f1955d2ad1cbf"
        }
      ]
    },
    {
      title: "Scrum Foundation Professional Certification",
      subtitle: "Certiprof",
      image: require("./assets/images/scrumCourseLogo.png"),
      imageAlt: "Scrum course Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/ca128d9c-8652-4d16-a580-0bdd383d6bd1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me! ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
