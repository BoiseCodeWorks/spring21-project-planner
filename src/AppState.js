import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  // NOTE user is Auth0Profile
  user: {},
  // NOTE Account is Api Profile
  account: {},
  projects: [],
  activeProject: null,
  myProjects: [],
  activeProjects: [],
  activeProfile: null
})
