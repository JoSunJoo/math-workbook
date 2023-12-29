import Styled from '../../style';

import type { Data41QuizProps as Props } from '../../Type/Type4';

const Single41 = (props: Props) => {
  const { quiz1, quiz2, isCheck } = props;
  return (
    <Styled.DivSingleWrapper>
      <Styled.DivWrapper>
        <Styled.DivLeftCircle></Styled.DivLeftCircle>
        <Styled.DivLeftNum2 id="divLeft" isCheck={isCheck}>
          {quiz2}
        </Styled.DivLeftNum2>
        <Styled.DivCenterNum>{quiz1}</Styled.DivCenterNum>
      </Styled.DivWrapper>
    </Styled.DivSingleWrapper>
  );
};

export default Single41;
