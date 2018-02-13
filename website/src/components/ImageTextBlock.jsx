const view = ({ mode, src }, children) => (
  <div class="image-text-block">
    {
      mode === 'left'
        ? [
          <img class="image-block" src={src} alt="" />,
          <div class="text-block text-block-right">
            <p>{children}</p>
          </div>]
        : [
          <div class="text-block text-block-left">
            <p>{children}</p>
          </div>,
          <img class="image-block" src={src} alt="" />]
    }
  </div>
);

export default view;