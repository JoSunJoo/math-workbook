import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data22QuizProps2 as QuizProps } from '../../Type/Type1';

import img from '../../Image/redArrow.png';

const Single222 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;
  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.FitSingleWrapper1>
        <Styled.ColGapBox4 gap={1}>
          <Styled.InputBox4
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
            value={inputValue[idx][0]}
          />
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
