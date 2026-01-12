export function getFingerStates(landmarks) {
  const tips = {
    thumb: 4,
    index: 8,
    middle: 12,
    ring: 16,
    pinky: 20,
  };

  const pip = {
    thumb: 2,
    index: 6,
    middle: 10,
    ring: 14,
    pinky: 18,
  };

  return {
    thumb: landmarks[tips.thumb].x > landmarks[pip.thumb].x,
    index: landmarks[tips.index].y < landmarks[pip.index].y,
    middle: landmarks[tips.middle].y < landmarks[pip.middle].y,
    ring: landmarks[tips.ring].y < landmarks[pip.ring].y,
    pinky: landmarks[tips.pinky].y < landmarks[pip.pinky].y,
  };
}