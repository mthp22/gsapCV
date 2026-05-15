import { defineStore } from 'pinia'

export const useCVStore = defineStore('cv', {
  state: () => ({
    profile: {
      name: 'Your Name',
      title: 'Frontend Developer',
      tagline: 'I build interactive web experiences',
    },

    about: {
      description: 'Passionate developer focused on Vue.js, animations, and modern UI.',
    },

    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'GSAP', level: 80 },
      { name: 'CSS / SCSS', level: 88 },
    ],

    experience: [
      {
        role: 'Frontend Developer',
        company: 'Company A',
        period: '2023 - Present',
        description: 'Built scalable Vue applications.',
      },
      {
        role: 'Junior Developer',
        company: 'Company B',
        period: '2021 - 2023',
        description: 'Worked on UI components and APIs.',
      },
    ],

    projects: [
      {
        name: 'Portfolio Website',
        description: 'Animated personal portfolio using Vue & GSAP',
      },
      {
        name: 'E-commerce UI',
        description: 'Modern shopping UI with transitions',
      },
    ],
  }),
})
