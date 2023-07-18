export const blockScroll = () => {
  document.body.style.overflowY = 'hidden';
  document.documentElement.style.overflowY = 'hidden';
};

export const allowScroll = () => {
  document.body.style.overflowY = '';
  document.documentElement.style.overflowY = '';
};
