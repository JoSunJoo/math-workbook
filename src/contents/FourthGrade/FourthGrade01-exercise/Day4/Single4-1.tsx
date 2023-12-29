import Styled from '../../style';

import type { Data41QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-4-1.png';

const Single41 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4 } = props;
  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.ColGapBox3 gap={2}>
        <Styled.RelativeBox>
          <Styled.AsoluteBox3>
            <Styled.ImgSize16 src={img} alt="" />
          </Styled.AsoluteBox3>
          <Styled.SetBox2>
            <Styled.ColGapBox6 gap={2}>
              <Styled.BetweenBox>
                <Styled.WhiteText>① {quiz1}</Styled.WhiteText>
                <Styled.WhiteText>② {quiz2}</Styled.WhiteText>
              </Styled.BetweenBox>
              <Styled.BetweenBox>
                <Styled.WhiteText>③ {quiz3}</Styled.WhiteText>
                <Styled.WhiteText>④ {quiz4}</Styled.WhiteText>
              </Styled.BetweenBox>
            </Styled.ColGapBox6>
          </Styled.SetBox2>
        </Styled.RelativeBox>
        <Styled.SetCenter>
          <Styled.RowBox>
            <Styled.TextSize>가장 큰 수:</Styled.TextSize>
            <Styled.ShortInput2 />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.TextSize>가장 작은 수:</Styled.TextSize>
            <Styled.ShortInput2 />
          </Styled.RowBox>
        </Styled.SetCenter>
      </Styled.ColGapBox3>
    </Styled.RowBox13>
  );
};

export default Single41;
