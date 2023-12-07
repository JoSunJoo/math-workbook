import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const Single32 = (props: QuizProps) => {
  const { id, quiz1 } = props;
  return (
    <Styled.SingleWrapper5>
      <div>{id}</div>
      <Styled.SetCenter>
        <Styled.RowBox8>
          <Styled.RowBox7>
            <div>{quiz1}</div>
            <div>=</div>
            <Styled.InputBox3 />
          </Styled.RowBox7>
          <div>➨</div>
          <Styled.BorderBox2>검산</Styled.BorderBox2>
          <Styled.MiddleInput></Styled.MiddleInput>
        </Styled.RowBox8>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single32;
