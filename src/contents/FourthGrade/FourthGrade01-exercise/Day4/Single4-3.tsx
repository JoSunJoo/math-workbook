import Styled from '../../style';

import type { Data43QuizProps as QuizProps } from '../../Type/Type1';

const Single43 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.ColorBox1>{quiz1}</Styled.ColorBox1>
      <Styled.CircleInput />
      <Styled.ColorBox2>{quiz2}</Styled.ColorBox2>
    </Styled.RowBox13>
  );
};

export default Single43;
