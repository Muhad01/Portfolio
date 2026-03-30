import projectsData from './projects.json'

/** Default live preview URL when `previewUrl` is missing in projects.json */
export const DEFAULT_PROJECT_PREVIEW_URL =
  "https://portfolio-two-mu-etv822mogw.vercel.app/" as const

export interface Project {
  slug: string
  /** Live site URL for the Mac-style iframe preview; defaults to {@link DEFAULT_PROJECT_PREVIEW_URL} */
  previewUrl?: string
  category: string
  title: string
  description: string
  tags: string[]
  client: string
  year: string
  technologies: string[]
  about: string[]
}

export function getProjectPreviewUrl(project: Project): string {
  const raw = project.previewUrl?.trim()
  return raw && raw.length > 0 ? raw : DEFAULT_PROJECT_PREVIEW_URL
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
