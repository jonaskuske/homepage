import { SkillDiagramIcon } from '@/components'
import { svgTransform as supportsSvgTransform } from '@/lib/browser-support'

const showHideText = ({ target }) => {
  target.closest('svg') && target.closest('svg').classList.toggle('skill-icon-show-text')
}

export const SkillIcons = ({ skills, themeColor }) => {
  return skills.map(skill => {
    if (supportsSvgTransform) {
      return <SkillDiagramIcon ontouchstart={showHideText} skill={skill} themeColor={themeColor} />
    }

    return (
      <div class="skill-icon-compat">
        <SkillDiagramIcon
          skill={skill}
          display="static"
          themeColor={themeColor}
          ontouchstart={showHideText}
        />
        <div style={{ pointerEvents: 'none' }}>
          <SkillDiagramIcon skill={skill} display="ring" themeColor={themeColor} />
        </div>
      </div>
    )
  })
}

const LegendIconsBase = ({ skillLevels, themeColor }) => {
  return skillLevels.map(skill => {
    if (supportsSvgTransform) {
      return (
        <SkillDiagramIcon
          class="skill-icon skill-icon-show-text"
          themeColor={themeColor}
          skill={skill}
        />
      )
    }

    return (
      <div class="skill-icon-compat">
        <SkillDiagramIcon
          skill={skill}
          class="skill-icon skill-icon-show-text"
          display="static"
          themeColor={themeColor}
        />
        <div style={{ pointerEvents: 'none' }}>
          <SkillDiagramIcon skill={skill} display="ring" themeColor={themeColor} />
        </div>
      </div>
    )
  })
}

const LegendIconsCompat = ({ skillLevels, themeColor }) => (
  <div class="skill-icon-container skill-icon-compat-legend">
    <LegendIconsBase skillLevels={skillLevels} themeColor={themeColor} />
  </div>
)

export const LegendIcons = supportsSvgTransform ? LegendIconsBase : LegendIconsCompat
