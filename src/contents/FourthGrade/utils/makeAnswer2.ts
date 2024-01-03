interface Data12QuizProps {
  id: string;
  type: number;
  quiz1: number;
  quiz2: number;
}

interface Props {
  data: Data12QuizProps[];
}
const makeAnswer = (props: Props) => {
  const { data } = props;
  const answer: string[][] = Array.from(Array(data.length), () => new Array(1));
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 2) {
      for (let i = 0; i < data.length; i++) {
        answer[i][0] = (data[i].quiz1 * data[i].quiz2).toString();
      }
    } else if (data[i].type === 1) {
      for (let i = 0; i < data.length; i++) {
        answer[i][0] = (data[i].quiz1 / data[i].quiz2).toString();
      }
    }
  }

  return answer;
};

export default makeAnswer;
