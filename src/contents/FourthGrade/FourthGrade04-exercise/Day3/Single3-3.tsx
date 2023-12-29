import Styled from '../../style';

import type { Data31QuizProps as Props } from '../../Type/Type4';

const Single33 = (props: Props) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      <Styled.InputWrapper1>
        <Styled.InputBox1 />
        <div> × </div>
        <div>{quiz1}</div>
        <div>=</div>
        <div>{quiz2}</div>
      </Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Single33;
