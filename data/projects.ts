import projectsData from './projects.json'

export interface Project {
  slug: string
  category: string
  title: string
  description: string
  tags: string[]
  client: string
  year: string
  technologies: string[]
  about: string[]
}

export const projects: Project[] = projectsData as Project[]

export const getFeaturedProjects = (count: number = 4): Project[] => {
  return projects.slice(0, count)
}

export const getAllProjects = (): Project[] => {
  return projects
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getAllProjectSlugs = (): string[] => {
  return projects.map(project => project.slug)
}
