const view = ({ skill: { color, image, percentage, name }, themeColor, compatibilityMode = false }) => (
  <svg width="150" height="150" viewBox="0 0 33.83098862 33.83098862" class="skill-icon">
    {(!compatibilityMode || compatibilityMode === 'static') && [<circle
      fill="#585858"
      cx="16.91549431"
      cy="16.91549431"
      r="15.91549431"
    />, < circle
      stroke="#f0f0f0"
      fill={themeColor}
      stroke-width="2"
      fill-opacity="0.8"
      stroke-opacity="0.9"
      cx="16.91549431"
      cy="16.91549431"
      r="15.91549431"
    />]}
    {(!compatibilityMode || compatibilityMode === 'ring') && <circle
      class="diagram"
      stroke={color || themeColor}
      stroke-width="2" stroke-linecap="round"
      fill="none" stroke-dasharray={`${percentage || '0'}, 100`}
      cx="16.91549431"
      cy="16.91549431"
      r="15.91549431"
    />}
    {(!compatibilityMode || compatibilityMode === 'static') && [<image width="16.91549431" x="7.9577471547154595" y="7.9577471547154595" height="16.91549431" href={image} />, <text x="16.91549431" y="16.5" alignment-baseline="central" text-anchor="middle" fill="#f0f0f0" opacity="0" font-size="4">{name}</text>
    ]}
  </svg>

);

export default view;
