let info = {
  name: "Dan Zhong",
  logo_name: "Dan Zhong",
  flat_picture: require("./src/assets/myPic.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am currently pursuing MS of Computer Science in University of San Francisco and interested in frondend, backend and fullstack engineer job position! I am passionate about learning and problem­-solving.",
  links: {
    linkedin: "https://www.linkedin.com/in/dan-zhong-b64650192/",
    github: "https://github.com/dzhong2019",
    resume:
     ""
  },
  education: [
    {
      name: "University Of San Francisco",
      place: "San Francisco,CA",
      date: "Aug, 2019 - Dec, 2022",
      degree: "Computer Science",

    }

  ],
  experience: [

    {
      name: "Openprise",
      place: "San Mateo, CA",
      date: "June,2020 - Aug,2020",
      position: "Software Engineer Intern",
      description:
        "Build a cross-platform (iOS & Android) Business Card Analyzer and handle requests from multiple endpoints for the app to communicate with the CRM.",
        skills: [
          "Java",
          "Flutter",
          "Micronaut",
          "Flask",
          "NLP",
          "Google ML Kit",
        ]
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Java",
        "Python",
        "Go",
        "C++",
        "C",
        "Javascript",
        "CSS",
        "HTML"

      ],
      icon: "fa fa-code"
    },
    {
      title: "web technologies",
      info: ["Node.js", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: [ "MySQL","Google Cloud"],
      icon: "fa fa-database"
     }
  ],
  projects: [

    {
      name: "Adventure Game",
      pictures: [

        {
          img: require("./src/assets/portfolio/todo-application/game.png")
        }

      ],
      technologies: ["JavaScript", "HTML", "Socket IO", "Kaboom.js"],
      date: "Sep - Dec 2021",
      description:
        "Designed and developed a real-time multiplayer game, where characters can chase and tag each other, earning points to win the game. Each character has different abilities that allow the character to perform different actions during the game."
    },
    {
      name: "Distributed File System & Computation Engine",
      pictures: [
        {
          img: require("./src/assets/portfolio/grocery/DFS.png")
        }
      ],
      technologies: ["Go"],
      date: "Sep - Nov 2021",
      description:  "Designed and developed fault tolerant DFS from scratch based off of Hadoop DFS and support MapReduce jobs.",
    },
    {
      name: "Travel Helper Web Application",
      pictures: [
        {
          img: require("./src/assets/portfolio/Gitscores/hotel.jpeg")
        },

      ],
      technologies: ["Java","JavaScript","JDBC", "MySQL","CSS", "Velocity Engine","BootStrap4", "GoogleMaps"],
      date: "Nov - Dec 2020",
      description:
        "Developed a website with a subset of the functionality of TripAdvisor, where users can register, login, search for hotels and reviews, view hotel information, write and edit hotel reviews, view nearby restaurants."
    }
  ]
};

export default info;



