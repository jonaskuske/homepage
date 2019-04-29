import actions from '@/main'
import { SkillDiagramIcon as Icon } from '@/components'
import { parseText } from '@/lib/helpers'
import { svgTransform as supportsSvgTransform } from '@/lib/browser-support'
import GoogleBadge from '@img/Google-badge.png'

const showHideText = evt => {
  const el = evt.target.closest('svg')
  el && el.classList.toggle('skill-icon-show-text')
}

const legendData = language => {
  const isEnglish = language === 'en'
  const base = { image: '', color: '#282828' }
  return [
    { name: isEnglish ? 'Advanced' : 'Fortgeschritten', percentage: 99, ...base },
    { name: isEnglish ? 'Proficient' : 'Vertraut', percentage: 50, ...base },
    { name: isEnglish ? 'Fundamentals' : 'Grundlagen', percentage: 25, ...base },
  ]
}

const AboutPage = ({ data, ...props }) => {
  const { themeColor, mobile, iconLegend, locales, language } = data
  const translations = locales.About || {}

  const className = 'about-page ' + props.class || ''

  const LegendIcons = legendData(language).map(skill => {
    if (supportsSvgTransform) {
      return <Icon class="skill-icon skill-icon-show-text" themeColor={themeColor} skill={skill} />
    }

    return (
      <div class="skill-icon-compat">
        <Icon
          skill={skill}
          class="skill-icon skill-icon-show-text"
          display="static"
          themeColor={themeColor}
        />
        <div style={{ pointerEvents: 'none' }}>
          <Icon skill={skill} display="ring" themeColor={themeColor} />
        </div>
      </div>
    )
  })
  const LegendIconsCompat = (
    <div class="skill-icon-container skill-icon-compat-legend"> {LegendIcons} </div>
  )

  return (
    <main key="about" {...props} class={className}>
      <h1>{translations.h1}</h1>
      <section>
        <p>{parseText(translations.introduction['1'])}</p>
        <p>{parseText(translations.introduction['2'])}</p>
      </section>
      <br />

      <section>
        <h3 class="icon-legend-title" onclick={actions.toggleIconLegend}>
          {iconLegend ? translations.iconLegendClose : translations.iconLegendShow}
        </h3>
        <div
          class={
            'skill-icon-container skill-icon-legend ' + (iconLegend ? '' : 'skill-icon-legend-hide')
          }
        >
          {supportsSvgTransform ? LegendIcons : LegendIconsCompat}
        </div>
      </section>

      {translations.skills.map(({ type: name, skills, text }) => {
        const SkillIcons = skills.map(skill => {
          if (supportsSvgTransform)
            return (
              <Icon ontouchstart={e => showHideText(e)} skill={skill} themeColor={themeColor} />
            )

          return (
            <div class="skill-icon-compat">
              <Icon
                skill={skill}
                display="static"
                themeColor={themeColor}
                ontouchstart={e => showHideText(e)}
              />
              <div style={{ pointerEvents: 'none' }}>
                <Icon skill={skill} display="ring" themeColor={themeColor} />
              </div>
            </div>
          )
        })

        return (
          <section>
            <h3>{name}</h3>
            <div class="skill-icon-container">{SkillIcons}</div>
            <p>{text}</p>
          </section>
        )
      })}

      <img src={GoogleBadge} alt="Google Scholarship recipient" id="google-badge" />
    </main>
  )
}

export default AboutPage
