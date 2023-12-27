import Styled from '../../style';

import type { Data43QuizProps as QuizProps } from '../../Type/Type2';

import img from '../../Image/2-4-3_2.png';

const Single43 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;

  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      <Styled.RelativeBox>
        <Styled.ImgSize6 src={img} />
        <Styled.AsoluteBox6>
          <div>{quiz1}</div>
          <div>{quiz2}</div>
          <Styled.NoBorderInputBox />
          <Styled.NoBorderInputBox />
        </Styled.AsoluteBox6>
      </Styled.RelativeBox>
    </Styled.SingleWrapper2>
  );
};

export default Single43;
