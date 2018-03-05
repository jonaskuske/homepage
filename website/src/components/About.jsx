import Icon from '@@/SkillDiagramIcon';
import { svgTransform } from '@/lib/browser-support';
import GoogleBadge from '@img/Google-badge.png';

const showHideText = evt => {
  let el;
  for (let target of evt.path) if (target.tagName === 'svg') el = target;
  el.classList.toggle('skill-icon-show-text');
};

const view = ({ class: className = '', data: { themeColor, locales: { About } }, ...props }) => (
  <main key='about' class={`${className} about-page`} {...props} >
    <h1>{About.h1}</h1>
    {About.skills.map(({ type: name, skills, text }) => (
      <section>
        <h3>{name}</h3>
        <div class="skill-icon-container">
          {svgTransform
            ? skills.map(skill => <Icon ontouchstart={e => showHideText(e)} skill={skill} themeColor={themeColor} />)
            : skills.map(skill => (
              <div class="skill-icon-compat">
                <Icon skill={skill} display="static" themeColor={themeColor} ontouchstart={e => showHideText(e)} />
                <div style={{ pointerEvents: 'none' }}><Icon skill={skill} display="ring" themeColor={themeColor} /></div>
              </div>))}
        </div>
        <p>{text}</p>
      </section>
    ))}
    <img src={GoogleBadge} alt="Google Scholarship recipient" style={{ width: '100%', maxWidth: '400px', marginTop: '3rem', marginLeft: '50%', boxShadow: '0 0 0 4px var(--theme-color)', contain: 'strict', transform: 'translateX(-50%)' }} />
  </main>
);

export default view;