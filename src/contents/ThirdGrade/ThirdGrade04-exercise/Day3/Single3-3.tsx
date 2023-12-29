import Styled from '../../style';

import type { Data12QuizProps } from '../../Type/Type1';

const Single33 = (props: Data12QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.DivSingleWrapper>
      <div>{id}</div>
      <Styled.DivWrapper>
        <Styled.DivLeftCircle></Styled.DivLeftCircle>
        <Styled.DivLeftNum>{quiz2}</Styled.DivLeftNum>
        <Styled.DivTopInputWrapper>
          <Styled.InputBox3 maxLength={1} />
          <Styled.InputBox3 maxLength={1} />
        </Styled.DivTopInputWrapper>
        <Styled.DivCenterNum2>{quiz1}</Styled.DivCenterNum2>
      </Styled.DivWrapper>
    </Styled.DivSingleWrapper>
  );
};

export default Single33;
