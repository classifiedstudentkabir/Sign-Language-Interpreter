export function getHandCenter(landmarks) {
  const wrist = landmarks[0];
  return { x: wrist.x, y: wrist.y };
}

export function distanceBetweenHands(handA, handB) {
  const dx = handA.x - handB.x;
  const dy = handA.y - handB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function areHandsClose(handA, handB, threshold = 0.15) {
  return distanceBetweenHands(handA, handB) < threshold;
}