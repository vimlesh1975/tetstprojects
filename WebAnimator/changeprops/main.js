setTimeout(() => {
  canvas.getObjects().forEach((element, i) => {
    console.log(element.id);
  });
  const element = canvas.getObjects().find((item) => item.id === 'f0');
  element.set({ text: 'My name is Vmlesh Kumar 1' });

  changePropOfObject('f0', 'left', 200);
  changePropOfObject('f0', 'top', 200);
  // changePropOfObject('f0', 'angle',85)
  // sheet.sequence.position=0;

  //posiotion at 0,0
  // changePropOfObject('f1', 'left',0)
  // changePropOfObject('f1', 'top',0)

  //shift position to +200, +300
  changePropOfObject(
    'f1',
    'left',
    canvas.getObjects().find((item) => item.id === 'f1').left + 200
  );
  changePropOfObject(
    'f1',
    'top',
    canvas.getObjects().find((item) => item.id === 'f1').top + 200
  );
}, 10);
