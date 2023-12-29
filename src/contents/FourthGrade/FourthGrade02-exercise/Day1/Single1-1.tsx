import Styled from '../../style';

import type { Data11QuizProps as QuizProps } from '../../Type/Type2';

import arrow from '../../Image/blueArrow.png';

const Single11 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.RowBox17>
        <Styled.RowBox4>
          <div>{quiz1} × </div>
          <Styled.InputBox3 />
          <div>= {quiz2}</div>
        </Styled.RowBox4>
        <Styled.ImgSize10 src={arrow} />
        <Styled.RowBox4>
          <Styled.InputBox1 />
          <div>÷</div>
          <Styled.InputBox1 />
          <div>=</div>
          <Styled.InputBox3 />
        </Styled.RowBox4>
      </Styled.RowBox17>
    </Styled.RowBox13>
  );
};

export default Single11;
