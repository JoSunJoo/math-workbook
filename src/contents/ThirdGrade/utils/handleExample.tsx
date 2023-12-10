import Styled from '../style';

export const handleEmptyBox = () => {
  return (
    <>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </>
  );
};
export const handleExamFrac = (mune: number, deno: number) => {
  return (
    <Styled.ColGapBox>
      <Styled.FractUnderLine>
        <Styled.BlueSpan>{mune}</Styled.BlueSpan>
      </Styled.FractUnderLine>
      <Styled.GreenSpan>{deno}</Styled.GreenSpan>
    </Styled.ColGapBox>
  );
};
//분자
export const handleMune = (nume: number) => {
  return <Styled.BlueSpan>{nume}</Styled.BlueSpan>;
};

//분모
export const handleDeno = (deno: number) => {
  return <Styled.GreenSpan>{deno}</Styled.GreenSpan>;
};
