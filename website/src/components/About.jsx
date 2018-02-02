import skillList from '@/assets/skillset';
import Icon from '@@/SkillDiagramIcon';


const view = ({ class: className = '', data: { color }, ...props }) => (
  <div key='about' class={`${className} about-page`} {...props} >
    <h1>&Uuml;BER MICH</h1>
    {skillList.map(({ type: name, skills, text }) => (
      <section>
        <h5>{name}</h5>
        {skills.map(skill => <Icon skill={skill} themeColor={color} />)}
        <p>{text}</p>
      </section>
    ))}
  </div>
);

export default view;