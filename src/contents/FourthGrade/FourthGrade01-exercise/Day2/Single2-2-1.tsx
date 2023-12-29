import Styled from '../../style';

import type { Data22QuizProps1 as QuizProps } from '../../Type/Type1';

import img from '../../Image/redArrow.png';

const Single221 = (props: QuizProps) => {
  const { id, quiz1 } = props;

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.FitSingleWrapper1>
        <Styled.ColGapBox3 gap={1}>
          <div>{quiz1}</div>
          <Styled.RowBox5>
            <Styled.ImgSize12 src={img} alt="" />
            <Styled.RowBox4>
              <div>10000이 </div>
              <Styled.InputBox3 />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>1000이 </div>
              <Styled.InputBox3 />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>100이 </div>
              <Styled.InputBox3 />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>10이 </div>
              <Styled.InputBox3 />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>1이 </div>
              <Styled.InputBox3 />
              <div> 개</div>
            </Styled.RowBox4>
          </Styled.RowBox5>
        </Styled.ColGapBox3>
      </Styled.FitSingleWrapper1>
    </Styled.RowBox13>
  );
};

export default Single221;
