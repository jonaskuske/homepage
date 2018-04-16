import { log, error } from '@/lib/helpers';
import loadImage from '@/lib/image-loader';

export const projectState = {
  projects: [],
  project: {
    id: '',
    title: '',
    text: '',
    image: ''
  },
};

export const projectActions = {
  /* Fetch the list of all projects in the current language */
  fetchProjects: () => async ({ language }, actions) => {
    const { default: projects } = await import(/* webpackChunkName: "projects/[request]" */ `@/assets/${language}-projectlist.js`);
    actions.setProjects(projects);
  },
  /* Fetch details of a given project and wait until its images are loaded */
  requestProject: id => async ({ projects, language }, actions) => {
    if (!id) return;

    const { default: project } = await import(
      /* webpackChunkName: "projects/[request]" */
      `@/assets/projects/${id}/${language}-assets`
    ).catch(e => {
      log(e);
      error(`Couldn't find requested project » ${id} «.`);
    });

    /* Create list of showcase & other images, then wait until they are loaded */
    const imageArray = [...project.blocks.map(block => block.image), project.showcase.image];
    await loadImage(imageArray);

    return new Promise((resolve, reject) => {
      actions.setProject({ id, ...project });
      resolve(project);
    });
  },
  setProjects: projects => ({ projects }),
  setProject: project => ({ project })
};