const getTime = () => {
  const aa = new Date();
  return (
    aa.getHours().toString().padStart(2, '0') +
    ':' +
    aa.getMinutes().toString().padStart(2, '0') +
    ':' +
    aa.getSeconds().toString().padStart(2, '0')
  );
};
setTimeout(() => {
  updatestring('ccg_1', getTime());
  setInterval(() => {
    updatestring('ccg_1', getTime());
  }, 1000);
  setInterval(() => {
    // changePropOfObject('ccg_1', 'fill', {
    //   r: Math.random(),
    //   g: Math.random(),
    //   b: Math.random(),
    //   a: 1,
    // });
    // changePropOfObject('ccg_1', 'left', 10);
    canvas
      .getObjects()
      .find((item) => item.id === 'ccg_1')
      .set({ fill: `hsl(${Math.random() * 255}, 100%, 80%)` });
    canvas.requestRenderAll();
  }, 1000);
}, 100);

// when using changePropOfObject for animated element sequence player stops.
// We can use canvas methods also for changing props
