import Styled from '../../style';

import type { Data22QuizProps2 as QuizProps } from '../../Type/Type1';

import img from '../../Image/redArrow.png';

const Single222 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5 } = props;

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.FitSingleWrapper1>
        <Styled.ColGapBox4 gap={1}>
          <Styled.InputBox4 />
          <Styled.GapRowBox gap={1}>
            <Styled.ImgSize12 src={img} alt="" />
            <Styled.GapRowBox gap={1}>
              <div>10000이 {quiz1}개, </div>
              <div>1000이 {quiz2}개, </div>
              <div>100이 {quiz3}개, </div>
              <div>10이 {quiz4}개, </div>
              <div>1이 {quiz5}개</div>
            </Styled.GapRowBox>
          </Styled.GapRowBox>
        </Styled.ColGapBox4>
      </Styled.FitSingleWrapper1>
    </Styled.RowBox13>
  );
};

export default Single222;
