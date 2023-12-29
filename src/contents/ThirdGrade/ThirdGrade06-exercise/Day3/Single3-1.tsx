import { useState } from 'react';

import Styled from '../../style';

import type { Data31QuizProps as QuizProps } from '../../Type/Type6';

const Single31 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3 } = props;
  const [hoveredStarIndex, setHoveredStarIndex] = useState(0); //분자
  const [clickedStarIndex, setClickedStarIndex] = useState(0); //최종별점
  const [hoveredStarIndex2, setHoveredStarIndex2] = useState(0); //분모
  const [clickedStarIndex2, setClickedStarIndex2] = useState(0); //최종별점

  const fillStarOfIndex = (num: number, event?: string): string => {
    if (event === 'enter' && hoveredStarIndex >= num) {
      return '#6297FF';
    }
    if (event === 'leave' && clickedStarIndex >= num) {
      return '#6297FF';
    }
    return '#E7ECE6';
  };
  const fillStarOfIndex2 = (num: number, event?: string): string => {
    if (event === 'enter' && hoveredStarIndex2 >= num) {
      return '#6297FF';
    }
    if (event === 'leave' && clickedStarIndex2 >= num) {
      return '#6297FF';
    }
    return '#E7ECE6';
  };
  return (
    <Styled.ColGapBox gap={1.5}>
      <Styled.TextBox4>
        <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
        <Styled.ColGapBox>
          <Styled.FractUnderLine>{quiz1}</Styled.FractUnderLine>
          <Styled.FractUnderNum>{quiz2}</Styled.FractUnderNum>
        </Styled.ColGapBox>
        <div>가 {quiz3}이면 전체는</div>
        <Styled.InputBox1 />
        <div>입니다.</div>
      </Styled.TextBox4>
      <Styled.ColGapBox gap={0.6}>
        <Styled.RowBox7>
          <Styled.TextSize>분자: </Styled.TextSize>
          <Styled.CountWrapper>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <Styled.CountBtn
                key={num}
                checked={fillStarOfIndex(
                  num,
                  hoveredStarIndex === 0 ? 'leave' : 'enter'
                )}
                onMouseEnter={() => setHoveredStarIndex(num)}
                onMouseLeave={() => setHoveredStarIndex(0)}
                onClick={() => {
                  setClickedStarIndex(num);
                }}
              />
            ))}
          </Styled.CountWrapper>
        </Styled.RowBox7>
        <Styled.RowBox7>
          <Styled.TextSize>분모: </Styled.TextSize>
          <Styled.CountWrapper>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <Styled.CountBtn
                key={num}
                checked={fillStarOfIndex2(
                  num,
                  hoveredStarIndex2 === 0 ? 'leave' : 'enter'
                )}
                onMouseEnter={() => setHoveredStarIndex2(num)}
                onMouseLeave={() => setHoveredStarIndex2(0)}
                onClick={() => {
                  setClickedStarIndex2(num);
                }}
              />
            ))}
          </Styled.CountWrapper>
        </Styled.RowBox7>
      </Styled.ColGapBox>
    </Styled.ColGapBox>
  );
};

export default Single31;
