import actions from '@/main';

const view = props => (
  <input
    type='color'
    aria-label='Select theme color for the site'
    tabindex={-1}
    onchange={({ target: { value } }) => {
      actions.setColor(value);
      actions.addColor(value);
    }}
    {...props}
  />
);

export default view;
