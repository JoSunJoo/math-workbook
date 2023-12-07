import Styled from '../../style';

import type { Data43QuizProps as Props } from '../../Type/Type4';

const Single43 = (props: Props) => {
  const { quiz1 } = props;
  return (
    <Styled.SingleWrapper4>
      <Styled.ColGapBox gap={0.7}>
        <div> {quiz1}</div>
        <Styled.InputBox1 maxLength={1} />
      </Styled.ColGapBox>
    </Styled.SingleWrapper4>
  );
};

export default Single43;
