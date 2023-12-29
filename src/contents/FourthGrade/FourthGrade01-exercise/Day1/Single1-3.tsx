import Styled from '../../style';

import type { Data13QuizProps as QuizProps } from '../../Type/Type1';

const Single13 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <div>{quiz1}</div>
      <Styled.InputBox1 />
      <div>{quiz2}</div>
    </Styled.RowBox13>
  );
};

export default Single13;
