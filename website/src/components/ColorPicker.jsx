import actions from '@/main';

const view = props => (
  <input
    type='color'
    onchange={({ target: { value } }) => {
      actions.setColor(value);
      actions.addColor(value);
    }}
    {...props}
  />
);

export default view;
