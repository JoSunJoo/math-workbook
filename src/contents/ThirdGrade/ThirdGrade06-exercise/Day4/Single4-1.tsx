import Styled from '../../style';

import type { Data41QuizProps as QuizProps } from '../../Type/Type6';

const Single41 = (props: QuizProps) => {
  const { id, method, mune, deno, len } = props;
  return (
    <Styled.ColGapBox gap={1.5}>
      <Styled.TextBox4>
        <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
        <div>{method}</div>
        <Styled.ColGapBox>
          <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
          <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
        </Styled.ColGapBox>
        <div>의 길이가 {len}cm 이면</div>
      </Styled.TextBox4>
      <Styled.TextBox4>
        전체의 길이는
        <Styled.InputBox1 />
        <div>cm 입니다.</div>
      </Styled.TextBox4>
    </Styled.ColGapBox>
  );
};

export default Single41;
