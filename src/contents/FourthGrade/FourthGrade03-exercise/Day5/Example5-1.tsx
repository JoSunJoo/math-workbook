import Styled from '../../style';

import img1 from '../../Image/3-5-1_1.png';
import img2 from '../../Image/3-5-1_2.png';

const Example51 = () => {
  const handleFrac = (type: number, quiz1: number, quiz2?: number) => {
    switch (type) {
      case 1:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 placeholder="9" />
            </Styled.FractUnderLine>
            <Styled.FitBox>{quiz1}</Styled.FitBox>
          </Styled.ColGapBox>
        );

      case 2:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <div>{quiz1}</div>
            </Styled.FractUnderLine>
            <Styled.FitBox>{quiz2}</Styled.FitBox>
          </Styled.ColGapBox>
        );

      default:
        break;
    }
  };
  return (
    <>
      <Styled.RowBox5>
        <Styled.MarginBox left={2}>
          <Styled.ColGapBox gap={1}>
            <Styled.HandleImgSize src={img1} size={2} />
            <Styled.GapRowBox2 gap={1}>
              <div>3</div>
              <div>=</div>
              {handleFrac(1, 3)}
            </Styled.GapRowBox2>
          </Styled.ColGapBox>
        </Styled.MarginBox>
      </Styled.RowBox5>
      <Styled.RowBox5>
        <Styled.MarginBox left={2} bottom={0.5}>
          <Styled.ColGapBox gap={1.3}>
            <Styled.HandleImgSize src={img2} size={2} />
            <Styled.GapRowBox2 gap={1}>
              {handleFrac(2, 6, 2)}
              <div>=</div>
              <Styled.InputBox3 placeholder="3" />
            </Styled.GapRowBox2>
          </Styled.ColGapBox>
        </Styled.MarginBox>
      </Styled.RowBox5>
    </>
  );
};

export default Example51;
