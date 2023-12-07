import Styled from '../../style';
import SignArrow from '../../utils/SignArrow';

import type { Data51QuizProps as QuizProps } from '../../Type/Type3';

const Single51 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, sign1 } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox3>{id}</Styled.IdNumBox3>
      <Styled.SetCenter>
        <Styled.TempSize1>
          <SignArrow deg={90} sign={sign1} />
        </Styled.TempSize1>
        <Styled.ColGapBox3 gap={1}>
          <SignArrow sign={sign1} />
          <Styled.ColGapBox3>
            <Styled.RowBox2>
              <Styled.RowBox>
                <Styled.NumBox1 color="rgba(255, 98, 146, 0.6)">
                  {quiz1}
                </Styled.NumBox1>
                <Styled.NumBox1 color="rgba(98, 151, 255, 0.6)">
                  {quiz2}
                </Styled.NumBox1>
              </Styled.RowBox>
              <Styled.InputBox1></Styled.InputBox1>
            </Styled.RowBox2>
            <Styled.NumBox1 color="rgba(143, 108, 255, 0.6)">
              {quiz3}
            </Styled.NumBox1>
          </Styled.ColGapBox3>
          <Styled.InputBox1></Styled.InputBox1>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single51;
