import { sendScore as sendScoreApi } from '@elice/extcontent-apis';

export const sendScoreUtil = async (myScore: number) => {
  await sendScoreApi({ score: myScore });
};
