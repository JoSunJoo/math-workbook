import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type3';

const Single532 = (props: QuizProps) => {
  const { quiz1, quiz2 } = props;

  return (
    <Styled.PaddingBox3>
      <Styled.RowBox4>
        <div>{quiz1}</div>
        <div>×</div>
        <div>{quiz2}</div>
      </Styled.RowBox4>
    </Styled.PaddingBox3>
  );
};

export default Single532;
