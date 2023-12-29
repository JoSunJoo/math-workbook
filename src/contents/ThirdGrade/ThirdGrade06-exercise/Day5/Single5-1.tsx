import Styled from '../../style';

import type { Data51QuizProps as QuizProps } from '../../Type/Type6';

const Single51 = (props: QuizProps) => {
  const { id, mune, deno, len } = props;
  return (
    <Styled.TextBox4>
      <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
      <Styled.ColGapBox>
        <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
        <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
      </Styled.ColGapBox>
      <div>이 {len}이면 전체의 길이는</div>
      <Styled.InputBox1 />
      <div>입니다.</div>
    </Styled.TextBox4>
  );
};

export default Single51;
