import Styled from '../../style';
import SignArrow from '../../utils/SignArrow';

import type { Data52QuizProps as QuizProps } from '../../Type/Type3';

const Single52 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4, sign1 } = props;
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
            <Styled.RowBox>
              <Styled.RowBox>
                <Styled.NumBox2 color="rgba(255, 98, 146, 0.4)">
                  {quiz1}
                </Styled.NumBox2>
                <Styled.NumBox2 color="rgba(98, 151, 255, 0.4)">
                  {quiz2}
                </Styled.NumBox2>
              </Styled.RowBox>
              <Styled.NumBox3Input noBottom={true} />
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2 color="rgba(143, 108, 255, 0.4)">
                {quiz3}
              </Styled.NumBox2>
              <Styled.NumBox2 color="rgba(255, 117, 19, 0.4)">
                {quiz4}
              </Styled.NumBox2>
              <Styled.NumBox3Input />
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox3Input noRight={true} />
              <Styled.NumBox3Input />
            </Styled.RowBox>
          </Styled.ColGapBox3>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single52;
