import { log, throwError, isDef } from '@/lib/helpers'
import imageLoader from 'basic-imageloader'

const state = {
  projectList: [],
  project: { id: '', title: '', text: '', image: '' },
}

const actions = {
  getProjectList: language => async (_, actions) => {
    const { default: projects } = await import(
      /* webpackChunkName: 'projects/[request]' */ `@/assets/${language}-projectlist.js`
    )
    return actions.setProjectList(projects)
  },
  getProjectById: ({ id, language }) => async (state, actions) => {
    id = isDef(id) ? id : state.project.id
    if (!id) return

    const { default: project } = await import(
      /* webpackChunkName: 'projects/[request]' */ `@/assets/projects/${id}/${language}-assets`
    ).catch(error => log(error) && throwError(`Couldn't find requested project » ${id} «.`))

    const allProjectImages = [project.showcase.image, ...project.blocks.map(block => block.image)]
    await imageLoader(allProjectImages)

    return actions.setProject({ id, ...project })
  },
  setProjectList: projectList => ({ projectList }),
  setProject: project => ({ project }),
}

export { state, actions }
