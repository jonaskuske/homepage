import Spinner from '@@/LoadingSpinner';

const view = ({ data: { color }, class: className = '', ...props }) => (
  <div class={`${className} loading-screen `} {...props}>
    <Spinner class='main-spinner' color={color} />
  </div>
);

export default view;
