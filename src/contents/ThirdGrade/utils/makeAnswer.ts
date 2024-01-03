import type { Data12QuizProps } from '../Type/Type1';

interface Props {
  type: number;
  data: Data12QuizProps[];
}
const makeAnswer = (props: Props) => {
  const { type, data } = props;
  let answer: string[][] = [[]];
  if (type === 1) {
    answer = Array.from(Array(data.length), () => new Array(1));
    for (let i = 0; i < data.length; i++) {
      answer[i][0] = (data[i].quiz1 * data[i].quiz2).toString();
    }
  } else if (type === 2) {
    answer = Array.from(Array(data.length), () => new Array(1));
    for (let i = 0; i < data.length; i++) {
      answer[i][0] = (data[i].quiz1 / data[i].quiz2).toString();
    }
  }
  return answer;
};

export default makeAnswer;
