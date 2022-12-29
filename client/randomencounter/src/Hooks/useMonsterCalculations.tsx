// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

export const getMaxMonsterCR = (
  avgCharLevel: number,
  numChar: number
): number => {
  let maxCR = 1;
  const dif = (4 - numChar) * 0.4;

  if (numChar === 4) {
    maxCR = avgCharLevel;
  } else {
    maxCR = avgCharLevel - dif;
  }
  if (maxCR <= 1) {
    maxCR = 1;
  }
  return Math.round(maxCR);
};

export const getRandomCR = (minCR: number, maxCR: number): number => {
  const min = Math.ceil(minCR);
  const max = Math.floor(maxCR);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

export const getDifficulty = (randomCR: number, maxCR: number): string => {
  const difference = maxCR - randomCR;
  let difficulty = "Normal";

  if (difference === -1) {
    difficulty = "Hard";
  }
  if (difference === 0) {
    difficulty = "Normal";
  }
  if (difference === 2 || difference === 1) {
    difficulty = "Easy";
  }
  if (difference > 2) {
    difficulty = "Very Easy";
  }
  return difficulty;
};
