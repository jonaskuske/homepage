import skillList from '@/assets/skillset';
import Icon from '@@/SkillDiagramIcon';
import { svgAnimation } from '@/lib/browser-support';

const showHideText = evt => {
  let el;
  for (let target of evt.path) if (target.tagName === 'svg') el = target;
  el.classList.toggle('skill-icon-show-text');
};

const view = ({ class: className = '', data: { color }, ...props }) => (
  <div key='about' class={`${className} about-page`} {...props} >
    <h1>&Uuml;BER MICH</h1>
    {skillList.map(({ type: name, skills, text }) => (
      <section>
        <h5>{name}</h5>
        {svgAnimation
          ? skills.map(skill => <Icon ontouchstart={e => showHideText(e)} skill={skill} themeColor={color} />)
          : <div class="skill-icon-compat-container">
            {skills.map(skill => (
              <div class="skill-icon-compat">
                <Icon skill={skill} compatibilityMode="static" themeColor={color} ontouchstart={e => showHideText(e)} />
                <div style={{ pointerEvents: 'none' }}><Icon skill={skill} compatibilityMode="ring" themeColor={color} /></div>
              </div>))}
          </div>}
        <p>{text}</p>
      </section>
    ))}
  </div>
);

export default view;