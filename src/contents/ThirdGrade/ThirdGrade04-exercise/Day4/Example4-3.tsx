import Styled from '../../style';

import type { Data12QuizProps } from '../../Type/Type1';

const Example43 = (props: Data12QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.DivSingleWrapper2>
      <div>{id}</div>
      <Styled.DivWrapper>
        <Styled.DivLeftCircle></Styled.DivLeftCircle>
        <Styled.DivLeftNum>{quiz2}</Styled.DivLeftNum>
        <Styled.DivCenterNum>{quiz1}</Styled.DivCenterNum>
      </Styled.DivWrapper>
    </Styled.DivSingleWrapper2>
  );
};

export default Example43;
