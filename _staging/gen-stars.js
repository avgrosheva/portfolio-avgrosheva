function star({cx=50, cy=50, outerR=45, innerR=45*0.382, rotateDeg=-90, outerScaleX=1, outerScaleY=1, innerJitter=[0,0,0,0,0], outerJitter=[0,0,0,0,0], innerRotateOffsetDeg=0}) {
  const pts = [];
  for (let i = 0; i < 5; i++) {
    const outerAngle = (rotateDeg + i * 72) * Math.PI / 180;
    const oR = outerR * (1 + (outerJitter[i]||0));
    const ox = cx + Math.cos(outerAngle) * oR * outerScaleX;
    const oy = cy + Math.sin(outerAngle) * oR * outerScaleY;
    pts.push([ox, oy]);

    const innerAngle = (rotateDeg + 36 + innerRotateOffsetDeg + i * 72) * Math.PI / 180;
    const iR = innerR * (1 + (innerJitter[i]||0));
    const ix = cx + Math.cos(innerAngle) * iR * outerScaleX;
    const iy = cy + Math.sin(innerAngle) * iR * outerScaleY;
    pts.push([ix, iy]);
  }
  const d = pts.map((p, idx) => `${idx === 0 ? 'M' : 'L'}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ') + ' Z';
  return d;
}

// 1. Elongated: stretched vertically
console.log('ELONGATED:', star({ outerScaleX: 0.86, outerScaleY: 1.18, innerR: 45*0.4 }));

// 2. Tilted: rotated, one dominant point
console.log('TILTED:', star({ rotateDeg: -76, outerR: 45, innerR: 45*0.36 }));

// 3. Asymmetric: irregular per-point radii
console.log('ASYMMETRIC:', star({
  outerJitter: [0.05, -0.1, 0.08, -0.04, -0.02],
  innerJitter: [-0.1, 0.12, -0.05, 0.08, -0.08],
  innerRotateOffsetDeg: 3,
}));

// 4. Sharp: deep inner radius, slight rotation
console.log('SHARP:', star({ innerR: 45*0.3, rotateDeg: -84 }));
