const animation = 'spin 1.6s linear infinite';

const view = ({ color, id = '', animation: { outer = true, inner = true } = {}, color: { dash = '#f0f0f0', stroke = '#f0f0f0' } = {}, ...props }) => {
  return (
    <svg viewBox="0 0 120 120" fill="transparent" {...props} >
      <circle
        r={42}
        cx={60}
        cy={60}
        fill={'transparent'}
        stroke={dash}
        stroke-width={6}
        stroke-dasharray="2 9.5"
        style={{ animation: outer ? animation : '', transformOrigin: '60px 60px' }}
      />
      <linearGradient id={`half-circle${id}`}>
        <stop offset="0%" stop-opacity="0" />
        <stop offset="49.99%" stop-opacity="0" />
        <stop offset="50%" stop-color={stroke} />
        <stop offset="100%" stop-color={stroke} />
      </linearGradient>
      <circle
        r={36}
        cx={60}
        cy={60}
        fill={'transparent'}
        stroke={`url(#half-circle${id})`}
        stroke-width='2'
        style={{ animation: inner ? `${animation} reverse -0.2s` : '', transformOrigin: '60px 60px' }}
      />
    </svg>);
};

export default view;
