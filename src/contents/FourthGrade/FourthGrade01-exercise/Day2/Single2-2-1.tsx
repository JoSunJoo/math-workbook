import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data22QuizProps2 as QuizProps } from '../../Type/Type1';

import img from '../../Image/redArrow.png';

const Single221 = (props: QuizProps) => {
  const {
    id,
    quiz1,
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
        <Styled.ColGapBox3 gap={1}>
          <div>{quiz1}</div>
          <Styled.RowBox5>
            <Styled.ImgSize12 src={img} alt="" />
            <Styled.RowBox4>
              <div>10000이 </div>
              <Styled.InputBox3
                maxLength={1}
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
                value={inputValue[idx][0]}
              />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>1000이 </div>
              <Styled.InputBox3
                maxLength={1}
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 1)}
                value={inputValue[idx][1]}
              />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>100이 </div>
              <Styled.InputBox3
                maxLength={1}
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 2)}
                value={inputValue[idx][2]}
              />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>10이 </div>
              <Styled.InputBox3
                maxLength={1}
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 3)}
                value={inputValue[idx][3]}
              />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>1이 </div>
              <Styled.InputBox3
                maxLength={1}
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 4)}
                value={inputValue[idx][4]}
              />
              <div> 개</div>
            </Styled.RowBox4>
          </Styled.RowBox5>
        </Styled.ColGapBox3>
      </Styled.FitSingleWrapper1>
    </Styled.RowBox13>
  );
};

export default Single221;
