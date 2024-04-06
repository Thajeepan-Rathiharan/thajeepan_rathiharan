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
      'A one page website that was responsive and filled with dummy content.',
    stack: ['HTML', 'CSS', 'JavaScrip','React'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/App-Site',
    livePreview: 'https://thajeepan-rathiharan.github.io/App-Site/',
  },
  {
    name: 'Naruto Shippuden Quiz',
    description:
      'A quiz about my favourite anime.',
    stack: ['HTMl', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/Module-2-Assessment',
    livePreview: 'https://thajeepan-rathiharan.github.io/Module-2-Assessment/',
  },
  {
    name: 'Naruto Flash Game',
    description:
      'My attempt at a flash game with my favourite anime.',
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/naruto-flash-game',
    livePreview: 'https://thajeepan-rathiharan.github.io/naruto-flash-game/',
  },
  {
    name: 'Jujutsu Kaisen Space Invaders',
    description:
      'A space invaders clone using anime characters from the show Jujutsu Kaisen.',
    stack: ['Python'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/jjk_space_invaders',
    
  },
  {
    name: 'Simple Chatbot',
    description:
      'A simpe chatbot that asks questions and responds to the users answers.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Thajeepan-Rathiharan/Simple_Chatbot_React',
    livePreview: 'https://thajeepan-rathiharan.github.io/Simple_Chatbot_React/',
  },
  {
    name: 'Weather App',
    description:
      'Weather app that tells you the weather based on the city or town you search for.',
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