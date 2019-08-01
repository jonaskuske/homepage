import { codeSkills, designSkills } from './aboutPage/skills'
import { LegendIcons, SkillIcons } from './aboutPage/SkillIcons'
import GoogleBadge from '@/assets/images/Google-badge.png'

const AboutPage = ({ state: { ui, theme, i18n }, ...props }) => (_, actions) => {
  const iconLegendIsOpen = ui.iconLegendIsOpen
  const themeColor = theme.themeColor

  const t = i18n.t.forNamespace('AboutPage')

  const className = 'about-page ' + (props.class || '')
  const legendTitle = iconLegendIsOpen
    ? t.inline('closeLegend')`Hide icon legend ⬆`
    : t.inline('openLegend')`Show icon legend ⬇`
  const legendClassName = iconLegendIsOpen ? '' : 'skill-icon-legend-hide'

  const skillLevels = [
    { name: t.inline('skillLevel.high')`Advanced`, percentage: 99, color: '#282828' },
    { name: t.inline('skillLevel.medium')`Proficient`, percentage: 50, color: '#282828' },
    { name: t.inline('skillLevel.low')`Fundamentals`, percentage: 25, color: '#282828' },
  ]

  return (
    <main key="about" {...props} class={className}>
      <h1>{t.inline('title')`About Me`}</h1>
      <section>
        <p>{t.inline(
          'introductionPast',
        )`I am Jonas Kuske, creative mind and passionate developer.<br />I've been into tech ever since I was a kid and when I fell in love with design during my final years in school, I decided to study "digital media production". The first semesters of my studies tought me skills from many different fields of media – video production, 3D modelling, prototyping – but creating interactive experiences always fascinated me the most.`}</p>
        <p>{t.inline(
          'introductionFuture',
        )`Because of this, I now put all my focus on modern web development and design and try to grow my skillset in parallel to my studies. For example I am working my way towards a Nanodegree as a "Mobile Web Specialist" courtesy of a Google Scholarship, I attend conferences and hackathons and always look for new ways to improve myself - because this line of work is ever-changing.`}</p>
      </section>
      <br />

      <section>
        <h3 class="icon-legend-title" onclick={actions.ui.toggleIconLegend}>
          {legendTitle}
        </h3>
        <div class={'skill-icon-container skill-icon-legend ' + legendClassName}>
          <LegendIcons skillLevels={skillLevels} themeColor={themeColor} />
        </div>
      </section>

      <section>
        <h3>{t.inline('codeSkills.title')`Web Development`}</h3>
        <div class="skill-icon-container">
          <SkillIcons skills={codeSkills} themeColor={themeColor} />
        </div>
        <p>{t.inline(
          'codeSkills.text',
        )`I have a special interest for modern web technologies blurring the lines between web and native applications. I enjoy working with various JavaScript frameworks and libraries like Vue and React and like to try out newer, smaller tools. Still, having a good understanding of vanilla JavaScript is important to me - especially because at least since ES2015 it has turned into a full-featured and at times even elegant language, in my opinion.`}</p>
      </section>

      <section>
        <h3>{t.inline('designSkills.title')`Design`}</h3>
        <div class="skill-icon-container">
          <SkillIcons skills={designSkills} themeColor={themeColor} />
        </div>
        <p>{t.inline(
          'designSkills.text',
        )`At the same time I'm into modern and sleek design. Clear, geometric elements and a minimalistic look are my golden rules - only to break them when neccessary. Good design is predictably unpredictable.`}</p>
      </section>

      <img src={GoogleBadge} alt="Google Scholarship recipient" id="google-badge" />
    </main>
  )
}

export default AboutPage
