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
  const aa = new Date();
  updatestring('ccg_1', getTime());
  setInterval(() => {
    // const aa = new Date();
    updatestring('ccg_1', getTime());
  }, 1000);
  const aa2 = canvas.getObjects();
  const element = aa2.find((val) => val.id === 'ccg_1');
  const id_2 = aa2.find((val) => val.id === 'id_2');
  setInterval(() => {
    element.set({ fill: `hsl(${Math.random() * 255}, 100%, 80%)` });
    id_2.set({ fill: `hsl(${Math.random() * 255}, 100%, 10%)` });
    canvas.requestRenderAll();
  }, 1000);
}, 1000);
