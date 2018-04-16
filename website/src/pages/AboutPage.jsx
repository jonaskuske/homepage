import actions from '@/main';
import { svgTransform } from '@/lib/browser-support';
import { parseText } from '@/lib/helpers';
import { SkillDiagramIcon as Icon } from '@/components';
import GoogleBadge from '@img/Google-badge.png';

const showHideText = evt => {
  let el;
  for (let target of evt.path) if (target.tagName === 'svg') el = target;
  el.classList.toggle('skill-icon-show-text');
};

const legendData = lang => {
  const standard = { image: '', color: '#282828' };
  return [
    {
      name: lang ? 'Advanced' : 'Fortgeschritten',
      percentage: 99,
      ...standard
    },
    {
      name: lang ? 'Proficient' : 'Vertraut',
      percentage: 50,
      ...standard
    },
    {
      name: lang ? 'Fundamentals' : 'Grundlagen',
      percentage: 25,
      ...standard
    }];
};

const view = ({ class: className = '', data: { themeColor, mobile, iconLegend, locales: { About }, language }, ...props }) => {
  const isEnglish = language === 'en';

  return (
    <main key='about' class={`${className} about-page`} {...props} >
      <h1>{About.h1}</h1>
      <section>
        <p>{parseText(About.introduction['1'])}</p>
        <p>{parseText(About.introduction['2'])}</p>
      </section>
      <br />
      <section>
        <h3 class='icon-legend-title' onclick={actions.toggleIconLegend}>{iconLegend ? About.iconLegendClose : About.iconLegendShow}</h3>
        <div class={`skill-icon-container skill-icon-legend ${!iconLegend ? 'skill-icon-legend-hide' : ''}`}>
          {svgTransform
            ? legendData(isEnglish).map((skill) => <Icon class="skill-icon skill-icon-show-text" themeColor={themeColor} skill={skill} />)
            : <div class="skill-icon-container skill-icon-compat-legend"> {legendData(isEnglish).map(skill => <div class="skill-icon-compat">
              <Icon skill={skill} class="skill-icon skill-icon-show-text" display="static" themeColor={themeColor} />
              <div style={{ pointerEvents: 'none' }}><Icon skill={skill} display="ring" themeColor={themeColor} /></div>
            </div>)} </div>
          }
        </div>
      </section>
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
};

export default view;