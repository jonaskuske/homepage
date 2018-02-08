import Icon from '@@/SkillDiagramIcon';
import { svgTransform } from '@/lib/browser-support';

const showHideText = evt => {
  let el;
  for (let target of evt.path) if (target.tagName === 'svg') el = target;
  el.classList.toggle('skill-icon-show-text');
};

const view = ({ class: className = '', data: { color, locales: { About } }, ...props }) => (
  <main key='about' class={`${className} about-page`} {...props} >
    <h1>{About.h1}</h1>
    {About.skills.map(({ type: name, skills, text }) => (
      <section>
        <h3>{name}</h3>
        {svgTransform
          ? skills.map(skill => <Icon ontouchstart={e => showHideText(e)} skill={skill} themeColor={color} />)
          : <div class="skill-icon-compat-container">
            {skills.map(skill => (
              <div class="skill-icon-compat">
                <Icon skill={skill} display="static" themeColor={color} ontouchstart={e => showHideText(e)} />
                <div style={{ pointerEvents: 'none' }}><Icon skill={skill} display="ring" themeColor={color} /></div>
              </div>))}
          </div>}
        <p>{text}</p>
      </section>
    ))}
  </main>
);

export default view;