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
  username: "Ronald Diaz",
  title: "Hi all, I'm Ronald",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aN_HzC2t51c5wkn-_8HBHmKblkuWwwao/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ronaldidro",
  linkedin: "https://www.linkedin.com/in/ronaldidro/",
  gmail: "rondiazidro@gmail.com",
  facebook: "https://www.facebook.com/ronaldidro",
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
      "⚡ Develop highly interactive Front end and User Interfaces for your web or mobile applications"
    ),
    emoji(
      "⚡ Build robust and scalable Back end architectures to power your digital products with high performance and security"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase, AWS and others"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Node",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "AWS Services",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux distros",
      fontAwesomeClassname: "fab fa-linux"
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
      duration: "August 2012 - February 2017",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Trujillo National University",
      logo: require("./assets/images/untLogo.png"),
      subHeader:
        "Master's Degree in Information Technology Administration and Management",
      duration: "Started at May 2025",
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
      role: "Digital Services Development Specialist",
      company: "SGTD - PCM",
      companylogo: require("./assets/images/pcmLogo.png"),
      date: "June 2023 – March 2025",
      desc: "",
      descBullets: []
    },
    {
      role: "Software development services consultant",
      company: "PROMSACE - PCM",
      companylogo: require("./assets/images/promsaceLogo.png"),
      date: "October 2021 – May 2023",
      desc: ""
    },
    {
      role: "Programmer analyst",
      company: "IDE Solution",
      companylogo: require("./assets/images/ideLogo.png"),
      date: "June 2017 – September 2021",
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
      title: "Java Programming",
      subtitle: "Java 🔹 JavaFX 🔹 Charts 🔹 h2database",
      image: require("./assets/images/javaCourseLogo.webp"),
      imageAlt: "Java course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://certificates.mooc.fi/validate/y8jyik6id6a"
        }
      ]
    },
    {
      title: "Advanced course in programming",
      subtitle: "Python 🔹 OOP 🔹 Pygame",
      image: require("./assets/images/pythonCourseLogo.png"),
      imageAlt: "Python course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://certificates.mooc.fi/validate/eg8zbo0cg8a"
        }
      ]
    },
    {
      title: "Server Side Web Development Ruby on Rails",
      subtitle: "Ruby 🔹 Ruby on Rails 🔹 Hotwire 🔹 Turbo 🔹 Stimulus",
      image: require("./assets/images/railsCourseLogo.png"),
      imageAlt: "RoR course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/rails2023/en/6906332b7e74a6b0573ab11b85515764"
        }
      ]
    },
    {
      title: "Full Stack Open React Native",
      subtitle: "React Native 🔹 GraphQL 🔹 Apollo Client",
      image: require("./assets/images/nativeCourseLogo.png"),
      imageAlt: "React native course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/1d18b58a8d1a7ed8c0e87424fd28784e"
        }
      ]
    },
    {
      title: "Front End Development Libraries",
      subtitle: "Bootstrap 🔹 jQuery 🔹 SASS 🔹 React 🔹 Redux",
      image: require("./assets/images/frontendCourseLogo.webp"),
      imageAlt: "Frontend course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://www.freecodecamp.org/certification/fcc3712fdc5-af46-453a-be8a-7d711de3188a/front-end-development-libraries"
        }
      ]
    },
    {
      title: "Back End Development and Apis",
      subtitle: "Node 🔹 Express 🔹 MongoDB 🔹 Mongoose",
      image: require("./assets/images/backendCourseLogo.jpg"),
      imageAlt: "Backend course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://www.freecodecamp.org/certification/fcc3712fdc5-af46-453a-be8a-7d711de3188a/back-end-development-and-apis"
        }
      ]
    },
    {
      title: "Full Stack Open CI/CD",
      subtitle: "GitHub Actions 🔹 Workflows 🔹 Pipelines 🔹 Vesioning",
      image: require("./assets/images/cicdCourseLogo.webp"),
      imageAlt: "Cicd course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/f45a763adcf0bbd81f5164d98d401049"
        }
      ]
    },
    {
      title: "Full Stack Open Relational Databases",
      subtitle: "Sequelize 🔹 Migrations 🔹 PostgreSQL",
      image: require("./assets/images/databaseCourseLogo.png"),
      imageAlt: "Databases course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/f41c59af102b1970537a86cd0dfa0c3a"
        }
      ]
    },
    {
      title: "Full Stack Open Containers",
      subtitle: "Docker 🔹 Docker compose 🔹 Nginx 🔹 Redis",
      image: require("./assets/images/containersCourseLogo.png"),
      imageAlt: "Containers course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-containers/en/7c26e55e95c16f37a3510ae7e95e6ab5"
        }
      ]
    },
    {
      title: "Full Stack Open Typescript",
      subtitle: "Typescript",
      image: require("./assets/images/typescriptCourseLogo.png"),
      imageAlt: "Typescript course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/14a90c39dbd52a9a989f19f7e5abfebc"
        }
      ]
    },
    {
      title: "Full Stack Open GraphQL",
      subtitle: "GraphQL 🔹 Apollo Client 🔹 React 🔹 Apollo Server",
      image: require("./assets/images/graphqlCourseLogo.png"),
      imageAlt: "GraphQL course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/d9b01e2a2f67b3057392711a4fb109e2"
        }
      ]
    },
    {
      title: "AWS Digitech",
      subtitle: "Cloud Computing 🔹 AWS Services",
      image: require("./assets/images/awsCourseLogo.png"),
      imageAlt: "AWS course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://drive.google.com/file/d/16_-F-zqVhUHWBJw7Cy6h-JmCs873e8Uw/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Full Stack Open",
      subtitle:
        "React 🔹 Express 🔹 MongoDB 🔹 Node 🔹 Jest 🔹 Cypress 🔹 ESLint 🔹 Redux",
      image: require("./assets/images/fsoCourseLogo.webp"),
      imageAlt: "FSO course Logo",
      footerLink: [
        {
          name: "Show certificate",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/6e4cf64d32ad04e38f0f1955d2ad1cbf"
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+51 990 148 740",
  email_address: "rondiazidro@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
