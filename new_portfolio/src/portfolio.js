import aboutpic from "./Components/Access/myPhoto.jpg"

const header = {
  // can be left empty or deleted
  homepage: 'https://github.com/Thajeepan-Rathiharan/thajeepan_rathiharan',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  // can be left empty or deleted
  name: 'Thajeepan Rathiharan',
  role: 'Frontend Developer',
  description:
    'A Media Production graduate who has had a career change into Frontend Development.',
  resume: 'https://drive.google.com/drive/folders/12MP3uHk94Ew6_egSJqgxbvycI60gHfXhttps://drive.google.com/drive/folders/1Jhyrji6T82_BV6a5BeoaqOwRV_5pBPe9?usp=drive_linkA?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/thajeepan-rathiharan-188349224/',
    github: 'https://github.com/Thajeepan-Rathiharan',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'One Page Site',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['HTML', 'CSS', 'JavaScrip','React'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/App-Site',
    livePreview: 'https://thajeepan-rathiharan.github.io/App-Site/',
  },
  {
    name: 'Naruto Shippuden Quiz',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['HTMl', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/Module-2-Assessment',
    livePreview: 'https://thajeepan-rathiharan.github.io/Module-2-Assessment/',
  },
  {
    name: 'Naruto Flash Game',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/naruto-flash-game',
    livePreview: 'https://thajeepan-rathiharan.github.io/naruto-flash-game/',
  },
  {
    name: 'Jujutsu Kaisen Space Invaders',
    description:
      'GameStoreData is able to let user retrieve the game from database based on its year and category',
    stack: ['Python'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/jjk_space_invaders',
    
  },
  {
    name: 'Simple Chatbot',
    description:
      'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/Simple_Chatbot_React',
    livePreview: 'https://thajeepan-rathiharan.github.io/Simple_Chatbot_React/',
  },
  {
    name: 'Weather App',
    description:
      'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/weather-app',
    livePreview: 'https://thajeepan-rathiharan.github.io/weather-app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Angular',
  'Git',
  'Python',
  'PHP'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'thajee2002@gmail.com',
}

export { header, about, projects, skills, contact }