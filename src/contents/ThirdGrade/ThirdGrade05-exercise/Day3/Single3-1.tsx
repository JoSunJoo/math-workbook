import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const Single31 = (props: QuizProps) => {
  const { id, quiz1 } = props;
  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      <Styled.SetCenter>
        <Styled.RowBox4>
          <div>{quiz1}</div>
          <div>➨</div>
          <Styled.BorderBox2>검산</Styled.BorderBox2>
          <Styled.RowBox7>
            <Styled.InputBox3 />
            <div>×</div>
            <Styled.InputBox3 />
            <div>=</div>
            <Styled.InputBox1 />
          </Styled.RowBox7>
        </Styled.RowBox4>
      </Styled.SetCenter>
    </Styled.SingleWrapper2>
  );
};

export default Single31;
