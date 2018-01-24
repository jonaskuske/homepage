const animation = 'spin 1.6s linear infinite';

const gradientRects = [
  { x: 0, y: 60, start: 0.5, end: 0 },
  { x: 0, y: 0, start: 0.5, end: 0.75 },
  { x: 60, y: 0, start: 0.75, end: 0.9 },
  { x: 60, y: 60, start: 0.9, end: 1 }
];

const spinningGradients = props => (props.definitions.map(
  ({ x, y, start, end }) => [
    <linearGradient id={`gradient-${x}-${y}`} key="gradient">
      <stop offset="0%" stop-color="#fff" stop-opacity={end} />
      <stop offset="100%" stop-color="#fff" stop-opacity={start} />
    </linearGradient>,
    <rect
      key="rectangle"
      x={x}
      y={y}
      width={60}
      height={60}
      fill={`url(#gradient-${x}-${y})`}
      style={{ animation, transformOrigin: '60px 60px' }}
    />
  ]
));

const LoadingSpinner = props => (
  <svg viewBox="0 0 120 120" fill="transparent">
    <circle
      r={42}
      cx={60}
      cy={60}
      fill={'transparent'}
      stroke={'#282828'}
      stroke-width={6}
      stroke-dasharray="2 9.5"
    />
    <spinningGradients definitions={gradientRects} />
    <linearGradient id="half-circle">
      <stop offset="0%" stop-opacity="0" />
      <stop offset="49.99%" stop-opacity="0" />
      <stop offset="50%" stop-color="#282828" />
      <stop offset="100%" stop-color="#282828" />
    </linearGradient>
    <circle
      r={36}
      cx={60}
      cy={60}
      fill={'transparent'}
      stroke='url(#half-circle)'
      stroke-width={2}
      style={{ animation: `${animation} reverse -0.2s`, transformOrigin: '60px 60px' }}
    />
  </svg>);

export default LoadingSpinner;