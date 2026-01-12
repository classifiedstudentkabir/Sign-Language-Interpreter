export function detectHands(results) {
  if (!results.multiHandLandmarks || !results.multiHandedness) {
    return { count: 0, hands: [] };
  }

  const hands = results.multiHandLandmarks.map((landmarks, index) => ({
    id: index,
    landmarks,
    handedness: results.multiHandedness[index].label, // Left / Right
  }));

  return {
    count: hands.length,
    hands,
  };
}