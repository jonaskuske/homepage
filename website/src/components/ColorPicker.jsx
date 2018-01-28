import actions from '@/main';

export default ({ ...props }) => (<input type='color' onchange={e => actions.setColor(e.target.value)} {...props} />);