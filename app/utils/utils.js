export const throttle = (fn, threshhold) => {
  let last;
  let timer;
  const t = threshhold || 500;
  return function(...args) {
    const ctx = this;
    const now = +new Date();
    if (last && now < last + t) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(ctx, args);
      }, t);
    } else {
      last = now;
      fn.apply(ctx, args);
    }
  };
};
export const randomColor = alpha =>
  `rgba(${random([55, 255], true)},${random([55, 255], true)},${random(
    [55, 255],
    true
  )}, ${alpha || 0.8})`;

export const random = (interval, int) => {
  const max = Math.max(...interval);
  const min = Math.min(...interval);
  const num = Math.random() * (max - min) + min;
  return int ? Math.round(num) : num;
};

export const randomColors = () => {
  const colorElements = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';
  const colorArray = colorElements.split(',');
  let color = '#';
  for (let index = 0; index < 6; index++) {
    color += colorArray[Math.floor(Math.random() * 16)];
  }
  return color;
};
