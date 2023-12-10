import Styled from '../../style';

import type { Data52QuizProps as QuizProps } from '../../Type/Type6';

const Single52 = (props: QuizProps) => {
  const { id, method, mune, deno, len, totalText, unit } = props;
  return (
    <Styled.ColGapBox gap={1}>
      <Styled.TextBox4>
        <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
        <div>{method}의 </div>
        <Styled.ColGapBox>
          <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
          <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
        </Styled.ColGapBox>
        <div>
          이 {len}
          {unit} 일 때
        </div>
      </Styled.TextBox4>
      <Styled.TextBox4>
        {totalText}
        <Styled.InputBox1 />
        <div>{unit}입니다.</div>
      </Styled.TextBox4>
    </Styled.ColGapBox>
  );
};

export default Single52;
