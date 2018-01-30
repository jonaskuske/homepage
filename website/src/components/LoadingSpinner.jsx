const animation = 'spin 1.6s linear infinite';

const view = ({ color, id = '', ...props }) => {
  return (
    <svg viewBox="0 0 120 120" fill="transparent" {...props} >
      <circle
        r={42}
        cx={60}
        cy={60}
        fill={'transparent'}
        stroke={color || '#f0f0f0'}
        stroke-width={6}
        stroke-dasharray="2 9.5"
      />
      <linearGradient id={`half-circle${id}`}>
        <stop offset="0%" stop-opacity="0" />
        <stop offset="49.99%" stop-opacity="0" />
        <stop offset="50%" stop-color="#f0f0f0" />
        <stop offset="100%" stop-color="#f0f0f0" />
      </linearGradient>
      <circle
        r={36}
        cx={60}
        cy={60}
        fill={'transparent'}
        stroke={`url(#half-circle${id})`}
        stroke-width='2'
        style={{ animation: `${animation} reverse -0.2s`, transformOrigin: '60px 60px' }}
      />
    </svg>);
};

export default view;
