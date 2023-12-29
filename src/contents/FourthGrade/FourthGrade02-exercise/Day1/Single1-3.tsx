import Styled from '../../style';

import type { Data13QuizProps as Props } from '../../Type/Type2';

const Single13 = (props: Props) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.DivSingleWrapper>
      <div>{id}</div>
      <Styled.DivWrapper>
        <Styled.DivLeftCircle></Styled.DivLeftCircle>
        <Styled.DivLeftNum>{quiz2}</Styled.DivLeftNum>
        <Styled.DivTopInputWrapper>
          <Styled.InputBox7 />
        </Styled.DivTopInputWrapper>
        <Styled.DivCenterNum2>{quiz1}</Styled.DivCenterNum2>
      </Styled.DivWrapper>
    </Styled.DivSingleWrapper>
  );
};

export default Single13;
