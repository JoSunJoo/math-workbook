import Styled from '../../style';

import type { Data12QuizProps } from '../../Type/Type1';

const Single31 = (props: Data12QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.DivSingleWrapper3>
      <div>{id}</div>
      <Styled.DivWrapper3>
        <Styled.DivLeftCircle></Styled.DivLeftCircle>
        <Styled.DivLeftNum>{quiz2}</Styled.DivLeftNum>
        <Styled.DivTopInputWrapper>
          <Styled.InputBox3 maxLength={1} />
          <Styled.InputBox3 maxLength={1} />
        </Styled.DivTopInputWrapper>
        <Styled.DivCenterNum3>{quiz1}</Styled.DivCenterNum3>
        <Styled.DashedOrNotBoxWrapper>
          <Styled.RowBox>
            <Styled.DashedOrNotBox top={true} />
            <Styled.DashedOrNotBox right={true} top={true} />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.DashedOrNotBox bottom={true} />
            <Styled.DashedOrNotBox right={true} bottom={true} />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.DashedOrNotBox />
            <Styled.DashedOrNotBox right={true} />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.DashedOrNotBoxEnd isLeft={true} />
            <Styled.DashedOrNotBoxEnd isLeft={false} />
          </Styled.RowBox>
        </Styled.DashedOrNotBoxWrapper>
      </Styled.DivWrapper3>
    </Styled.DivSingleWrapper3>
  );
};

export default Single31;
