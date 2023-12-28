import Styled from '../../style';

// import type { Data41QuizProps as QuizProps } from '../../Type/Type4';
import img from '../../Image/2-4-1.png';

const Single41 = () => {
  return (
    // 위에서 아래, 왼쪽에서 오른쪽 순
    <Styled.RelativeBox2>
      <Styled.HandleImgSize2 src={img} size={40} />
      <Styled.GetAbsoluteBox top={0.95} left={16.2} />
      <Styled.GetAbsoluteBox top={0.95} left={21.25} />
      <Styled.GetAbsoluteBox top={6} left={11.13} />
      <Styled.GetAbsoluteBox top={6} left={16.2} />
      <Styled.GetAbsoluteBox top={11.1} left={6} />
      <Styled.GetAbsoluteBox top={11.1} left={21.3} />
      <Styled.GetAbsoluteBox top={11.1} left={31.45} />
      <Styled.GetAbsoluteBox top={11.1} left={36.55} />
      <Styled.GetAbsoluteBox top={16.2} left={6} />
      <Styled.GetAbsoluteBox top={16.2} left={11.1} />
      {/* 11 */}
      <Styled.GetAbsoluteBox top={16.2} left={16.2} />
      <Styled.GetAbsoluteBox top={16.2} left={26.4} />
      <Styled.GetAbsoluteBox top={21.3} left={26.4} />
      <Styled.GetAbsoluteBox top={21.3} left={31.45} />
      <Styled.GetAbsoluteBox top={21.3} left={36.5} />
      <Styled.GetAbsoluteBox top={26.35} left={11.13} />
      <Styled.GetAbsoluteBox top={26.35} left={16.18} />
      <Styled.GetAbsoluteBox top={26.35} left={21.28} />
      <Styled.GetAbsoluteBox top={26.35} left={31.45} />
      <Styled.GetAbsoluteBox top={31.47} left={21.3} />
      {/* 20 */}
      <Styled.GetAbsoluteBox top={31.47} left={26.3} />
      <Styled.GetAbsoluteBox top={31.47} left={31.45} />
      <Styled.GetAbsoluteBox top={36.5} left={21.3} />
      <Styled.GetAbsoluteBox top={36.5} left={26.4} />
      <Styled.GetAbsoluteBox top={36.5} left={31.45} />
    </Styled.RelativeBox2>
  );
};

export default Single41;
