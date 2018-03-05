const view = ({ skill: { color, image, percentage, name }, themeColor, display = false, ...props }) => (
  <svg width="150" height="150" viewBox="0 0 33.83098862 33.83098862" class="skill-icon" {...props}>
    {(!display || display === 'static') && [
      <circle
        fill="#585858"
        cx="16.91549431"
        cy="16.91549431"
        r="15.91549431"
      />,
      < circle
        fill={themeColor}
        fill-opacity="0.65"
        stroke="#f0f0f0"
        stroke-width="2"
        stroke-opacity="0.8"
        cx="16.91549431"
        cy="16.91549431"
        r="15.91549431"
      />
    ]}
    {(!display || display === 'ring') &&
      <circle
        class="diagram"
        fill="none"
        stroke={color || themeColor}
        stroke-width="2" stroke-linecap="round"
        stroke-dasharray={`${percentage || '0'}, 100`}
        cx="16.91549431"
        cy="16.91549431"
        r="15.91549431"
      />
    }
    {(!display || display === 'static') && [
      <image
        href={image}
        oncreate={el => el.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', image)}
        width="16.91549431"
        height="16.91549431"
        x="7.9577471547154595"
        y="7.9577471547154595"
      />,
      <text
        fill="#f0f0f0"
        opacity="0"
        font-size="4"
        text-anchor="middle"
        alignment-baseline="central"
        x="16.91549431"
        y="17"
      >
        {name}
      </text>
    ]}
  </svg>

);

export default view;
