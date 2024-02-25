export interface SocialAccount {
  name: string
  link: string
  icon: any
}

interface Hard {
  title: string
  descriptions: string[]
}

export interface Project {
  name: string
  link?: string
  role: string
  descriptions: string[]
  hard?: Hard
}

export interface Experience {
  company: string
  role: string
  location: string
  time: string
  projects: Project[]
}

export interface Education {
  name: string
  time: string
  major: string
  degree: string
}

export interface Skill {
  name: string
  descriptions: string[]
}

export interface Profile {
  name: string
  role: string
  location: string
  email: string
  phone: string
  birth: string
  photo?: string
  website?: string
  blog?: string
  socialAccounts: SocialAccount[]
}

export interface Resume {
  profile: Profile
  experiences: Experience[]
  educations: Education[]
  skills: Skill[]
  personalProjects: PersonalProject[]
}

export interface PersonalProject {
  name: string
  github: string
  description: string
  website?: string
  stars?: number
}
