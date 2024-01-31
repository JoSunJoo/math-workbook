import styled from '@emotion/styled';

const Styled = {
  ColGapBox: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  ColGapBox2: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  ColGapBox3: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  ColGapBox4: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  ColGapBox5: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  ColGapBox6: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  ColGapBox7: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  GapRowWrapBox: styled.div<{ gap?: number }>`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
    align-items: center;
    justify-content: center;
    & > div {
      width: 40%;
      justify-content: center;
    }
  `,
  WidthRowWrapBox: styled.div<{ width?: number; gap?: number }>`
    display: flex;
    flex-wrap: wrap;
    width: ${props => (props.width ? `${props.width}rem` : '')};
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
    align-items: center;
    justify-content: center;
    white-space: pre-wrap;
  `,
  WidthRowWrapBox2: styled.div<{ width?: number; gap?: number }>`
    display: flex;
    flex-wrap: wrap;
    width: ${props => (props.width ? `${props.width}rem` : '')};
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
    align-items: center;
    justify-content: flex-end;
  `,
  InfoBox: styled.div`
    display: flex;
    gap: 1.5rem;
    width: 80%;
    align-items: center;
  `,
  RowWrapBox: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 40%;
      justify-content: center;
    }
  `,
  RowWrapBox2: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 30%;
      justify-content: center;
    }
  `,
  RowWrapBox3: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: fit-content;
      justify-content: center;
    }
  `,
  RowWrapBox4: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    & > div {
      width: 30%;
      justify-content: center;
    }
  `,
  RowWrapBox5: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 25%;
      justify-content: center;
    }
  `,
  RowWrapBox6: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 25%;
      justify-content: flex-start;
    }
  `,
  RowWrapBox7: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 40%;
      justify-content: flex-start;
    }
  `,
  RowWrapBox8: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 35%;
      justify-content: flex-start;
      margin-left: 4rem;
    }
  `,
  RowWrapBox9: styled.div`
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: space-around;
    & > div {
      width: 30%;
      justify-content: center;
    }
  `,
  RowWrapBox10: styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: space-around;
    & > div {
      width: 19rem;
      justify-content: center;
    }
  `,
  RowWrapBox11: styled.div`
    display: flex;
    width: 50rem;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: space-around;
    & > div {
      width: 19rem;
      justify-content: center;
    }
  `,
  RowWrapBox12: styled.div`
    //절반씩
    display: flex;
    width: 55rem;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: flex-start;
    & > div {
      width: 25rem;
      justify-content: center;
    }
  `,
  RowWrapBox13: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  `,
  RowWrapBox14: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  `,
  RowWrapBox15: styled.div`
    //3개씩 좌측정렬
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: flex-start;
    & > div {
      width: 25%;
      justify-content: center;
      margin-left: 2rem;
    }
  `,
  RowWrapBox16: styled.div`
    //4개씩 좌측정렬
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 3rem;
    align-items: center;
    justify-content: flex-start;
    & > div {
      width: 17.4%;
      justify-content: center;
      margin-left: 2rem;
    }
  `,
  RowWrapBox17: styled.div`
    //4개씩 좌측정렬
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    margin-left: 1rem;
    & > div {
      width: 18.4%;
      justify-content: center;
    }
  `,
  RowWrapBox18: styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > div {
      width: calc(50%-3rem);
      justify-content: flex-start;
    }
  `,
  MakeWidth: styled.div<{ w?: number }>`
    width: ${props => (props.w ? `${props.w}rem` : '')};
    display: flex;
  `,
  GapRowBox: styled.div<{ gap?: number }>`
    display: flex;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  GapRowBox2: styled.div<{ gap?: number }>`
    display: flex;
    align-items: center;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  GapRowBox3: styled.div<{ gap?: number }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  LetterSpacingBox: styled.div<{ gap?: number }>`
    display: flex;
    letter-spacing: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,

  RowBox: styled.div`
    display: flex;
  `,
  RowBox2: styled.div`
    display: flex;
    width: 85%;
  `,
  RowBox3: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  `,
  RowBox4: styled.div`
    display: flex;
    gap: 0.3rem;
  `,
  RowBox5: styled.div`
    display: flex;
    gap: 1rem;
  `,
  RowBox6: styled.div`
    display: flex;
    gap: 5rem;
    align-items: center;
  `,
  RowBox12: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  `,
  RowBox13: styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
  `,
  RowBox14: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 4rem;
  `,
  RowBox15: styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    padding-left: 2.5rem;
  `,
  RowBox16: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;
  `,
  RowBox17: styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    align-items: center;
  `,
  RowBox18: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  `,
  BasicRowBox: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,

  BetweenBox: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `,
  BetweenBox2: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
  `,
  SetCenter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
  SetCenter2: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  FlexEndBox1: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3rem;
  `,
  FlexEndBox2: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    gap: 5rem;
    margin-right: 3rem;
  `,
  FlexEndBox3: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1.4rem;
  `,
  FlexStartBox1: styled.div`
    display: flex;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  MarginBottomBox: styled.div`
    margin-bottom: 3rem;
  `,
  MarginBottomBox2: styled.div`
    margin-bottom: 2rem;
  `,
  MarginBottomBox3: styled.div`
    margin-bottom: 1rem;
  `,
  MarginTopBox1: styled.div`
    margin-top: 1rem;
  `,
  GapMarginTopBox: styled.div<{ gap?: number }>`
    margin-top: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  MarginBox: styled.div<{
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  }>`
    margin-left: ${props => (props.left ? `${props.left}rem` : '')};
    margin-right: ${props => (props.right ? `${props.right}rem` : '')};
    margin-top: ${props => (props.top ? `${props.top}rem` : '')};
    margin-bottom: ${props => (props.bottom ? `${props.bottom}rem` : '')};
  `,

  PaddingBox: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    padding: 4rem 2rem;
    align-items: center;
    justify-content: center;
  `,
  PaddingBox5: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    padding: 4rem 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
  PaddingBox6: styled.div`
    display: flex;
    gap: 1.875rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
  PaddingBox7: styled.div`
    display: flex;
    padding: 2rem 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  PaddingBox8: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    padding: 4rem 0rem;
    align-items: center;
    justify-content: center;
  `,
  FixedWrapper: styled.div`
    width: 18.75rem;
    height: 9.375rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1rem;
  `,
  SingleWrapper1: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 248, 240, 0.6);
    position: relative;
  `,
  SingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    position: relative;
  `,
  SingleWrapper3: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    max-width: 55vw;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 248, 240, 0.6);
    position: relative;
  `,
  SingleWrapper4: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 55vw;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 248, 240, 0.6);
    position: relative;
  `,
  SingleWrapper5: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 45vw;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 248, 240, 0.6);
    position: relative;
  `,
  SingleWrapper7: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    height: fit-content;
    border-radius: 1rem;
    padding: 3rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    position: relative;
  `,
  SingleWrapper8: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    height: fit-content;
    min-height: 18.125rem;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    position: relative;
  `,
  SingleWrapper9: styled.div`
    width: 40vw;
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    padding: 2rem 4rem;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1.25rem;
  `,
  FitSingleWrapper1: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    position: relative;
  `,
  FitSingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: fit-content;
    height: fit-content;
    border-radius: 1rem;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    position: relative;
  `,
  FitInputWrapper2: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    padding: 2rem 4rem;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1.25rem;
  `,
  FitInputWrapper3: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    min-width: 38.125rem;
    padding: 2rem 4rem;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1.25rem;
  `,
  NewFitInputWrapper3: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    min-width: 40rem;
    padding: 2rem 4rem;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1.25rem;
  `,
  FitInputWrapper4: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    width: 100%;
    height: 100%;
    min-height: 12.5rem;
    padding: 2rem;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1.25rem;
    align-items: center;
  `,
  FitExampleBox2: styled.div`
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: fit-content;
    height: fit-content;
    padding: 1rem 3rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox1: styled.div`
    //SingleWrapper5 와 비슷한 예제 박스
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 50rem;
    height: 13rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 2rem;
  `,
  ExampleBox8: styled.div`
    //height:fit
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: fit-content;
    padding: 2rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox9: styled.div`
    //대부분의 길이정도의 긴 박스
    //height:fit
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 65rem;
    height: fit-content;
    padding: 2rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  FitExampleBox: styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 3rem;
  `,
  InputWrapper1: styled.div`
    display: flex;
    gap: 0.75rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    align-items: center;
  `,

  LongInput: styled.input`
    width: 60%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
  `,
  LongInput2: styled.input`
    width: 100%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
  `,
  LongInput3: styled.input`
    width: 100%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
    text-align: center;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  MiddleInput: styled.input`
    width: 40%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
  `,
  MiddleInput2: styled.input`
    width: 7rem;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
    text-align: center;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  ShortInput: styled.input`
    width: 13%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
    text-align: center;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  ShortInput2: styled.input`
    width: 2.5rem;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
    text-align: center;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox1: styled.input`
    width: 4.8125rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputSameBox1: styled.div<{ color?: string }>`
    width: 4.8125rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: ${props => (props.color === 'red' ? '#ff2e00' : '#2b1840')};
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
  `,
  InputBox2: styled.input`
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox3: styled.input`
    width: 2.5rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox4: styled.input`
    width: 6.6rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox5: styled.input`
    width: 6.6rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.3rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    letter-spacing: 0.375rem;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox6: styled.input`
    width: 7.3rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding-left: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    letter-spacing: 1.3rem;
    margin-left: 0.4rem;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox7: styled.input`
    width: 7.3rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding-left: 0.5rem;
    padding-right: 0.7rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    letter-spacing: 1.3rem;
    margin-left: 0.4rem;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox8: styled.input`
    width: 3.2rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox9: styled.input`
    width: 10rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  NoBorderInputBox: styled.input`
    width: 3.1rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    outline: none;
    border: none;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    margin-left: -0.9rem;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputSameBox4: styled.div<{ color?: string }>`
    width: 6.6rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    color: ${props => (props.color === 'red' ? '#ff2e00' : '#2b1840')};
  `,
  IdNumBox: styled.div`
    position: absolute;
    top: 1.8rem;
    left: 1.2rem;
    font-size: 1.35rem;
  `,
  IdNumBox2: styled.div`
    margin-right: 1.2rem;
  `,
  TextBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-left: 1rem;
  `,
  TextBox: styled.div`
    width: 95%;
    height: fit-content;
    white-space: pre-wrap;
    line-height: 150%;
    font-weight: 500;
    font-size: 1.25rem;
  `,
  TextBox2: styled.div`
    white-space: pre-wrap;
    line-height: 150%;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  `,
  TextBox3: styled.div`
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    position: relative;
    white-space: nowrap;
    word-break: keep-all;
  `,
  TextBox4: styled.div`
    line-height: 150%;
    font-size: 1.25rem;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
  `,
  TextSize: styled.div`
    font-size: 1.25rem;
    font-weight: 600;
  `,
  TextSize2: styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
    word-break: keep-all;
  `,
  FractUnderLine: styled.div`
    width: 115%;
    padding-bottom: 0.2rem;
    margin-bottom: 0.12rem;
    border-bottom: 1px solid black;
    text-align: center;
    line-height: 75%;
  `,
  FractUnderNum: styled.div`
    line-height: 95%;
  `,
  HandleImgSize: styled.img<{ size?: number }>`
    height: ${props => (props.size ? `${props.size}rem` : '')};
  `,
  HandleImgSize2: styled.img<{ size?: number }>`
    width: ${props => (props.size ? `${props.size}rem` : '')};
  `,
  ImgSize2: styled.img`
    width: 20vw;
    background-color: #fff;
  `,
  ImgSize3: styled.img`
    height: 6rem;
  `,
  ImgSize4: styled.img`
    width: 38vw;
  `,
  ImgSize5: styled.img`
    height: 10rem;
  `,
  ImgSize6: styled.img`
    height: 7rem;
  `,
  ImgSize7: styled.img`
    height: 25rem;
  `,
  ImgSize8: styled.img`
    height: 20rem;
  `,
  ImgSize9: styled.img`
    width: 14.8125rem;
  `,
  ImgSize10: styled.img`
    height: 2rem;
  `,
  ImgSize11: styled.img`
    width: 1rem;
  `,
  ImgSize12: styled.img`
    height: 1rem;
  `,
  ImgSize13: styled.img`
    width: 50rem;
  `,
  ImgSize14: styled.img`
    width: 70%;
  `,
  ImgSize15: styled.img`
    height: 3rem;
  `,
  ImgSize16: styled.img`
    height: 13rem;
  `,
  ImgSize17: styled.img`
    width: 11rem;
    margin-right: 2rem;
    margin-top: 0.2rem;
  `,
  ImgSizeWidth: styled.img<{ width: number }>`
    width: ${props => (props.width ? `${props.width}rem` : '')};
    margin-right: 2rem;
    margin-top: 0.2rem;
  `,

  ImgBox2: styled.div`
    width: fit-content;
    padding: 3rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 3rem;
  `,
  ImgBox3: styled.div`
    width: fit-content;
    padding: 3rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 3rem;
    margin-bottom: 3rem;
  `,
  RelativeBox: styled.div`
    position: relative;
  `,
  AsoluteBox1: styled.div`
    position: absolute;
    top: -2.4rem;
    left: 2.3rem;
  `,
  AsoluteBox2: styled.div`
    position: absolute;
    top: 1.8rem;
    left: 2.3rem;
    display: flex;
  `,
  //1-2-3
  ImgBox1: styled.div`
    width: 40vw;
    padding: 3rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  //1권
  //1-2-3
  FitInputWrapper: styled.div`
    width: 50rem;
    display: flex;
    gap: 1rem;
    padding-right: 2rem;
  `,
  FitInputBox: styled.input`
    flex-grow: 1;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  FitInputSameBox: styled.div`
    flex-grow: 1;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
  `,
  FitInputSameBox2: styled.div`
    flex-grow: 1;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #ff2e00;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
  `,
  NonFlexText: styled.div`
    white-space: nowrap;
    word-break: keep-all;
  `,
  SetBox1: styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.6rem;
    align-items: center;
  `,
  //1-4-1
  AsoluteBox3: styled.div`
    position: absolute;
    top: 0;
    left: 0;
  `,
  SetBox2: styled.div`
    width: 100%;
    position: relative;
    width: 20.625rem;
    height: 13rem;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    padding-bottom: 2.5rem;
  `,
  WhiteText: styled.div`
    color: #fff;
  `,
  //1-4-3
  CircleInput: styled.input`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  ColorBox1: styled.div`
    width: 11rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 3px solid rgba(221, 211, 255, 1);
    background: rgba(221, 211, 255, 0.4);
    color: #2b1840;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  `,
  ColorBox2: styled.div`
    width: 11rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 3px solid rgba(208, 224, 255, 1);
    background: rgba(208, 224, 255, 0.4);
    color: #2b1840;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    /* rgba(221, 211, 255, 1) 보라색 */
    /* rgba(208, 224, 255, 1) 파란색 */
  `,

  //2권
  //2-1-2
  SelectSingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    /* width: 100%; */
    width: 15rem;
    height: 14rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background: rgba(221, 211, 255, 0.4);
    position: relative;
    border: 3px solid #ddd3ff;
    & > div {
      height: 25%;
    }
    & > div:first-of-type > label {
      border-radius: 0.8rem 0.8rem 0 0;
    }
    & > div:last-of-type > label {
      border-radius: 0 0 0.8rem 0.8rem;
      border-bottom: none !important;
    }

    & > div > input {
      width: 0;
      height: 0;
      display: none;
      &:checked + label {
        background-color: rgba(221, 211, 255, 1);
      }
    }
  `,
  SelectSingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    /* width: 100%; */
    width: 15rem;
    height: 10rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background: rgba(221, 211, 255, 0.4);
    position: relative;
    border: 3px solid #ddd3ff;
    & > div {
      height: 33%;
    }
    & > div:first-of-type > label {
      border-radius: 0.8rem 0.8rem 0 0;
    }
    & > div:last-of-type > label {
      border-radius: 0 0 0.8rem 0.8rem;
      border-bottom: none !important;
    }

    & > div > input {
      width: 0;
      height: 0;
      display: none;
      &:checked + label {
        background-color: rgba(221, 211, 255, 1);
      }
    }
  `,
  SelectSingleButton: styled.label`
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    flex-grow: 1;
    outline: none;
    width: 100%;
    height: 100%;
    border-bottom: 3px dashed #ddd3ff !important;
    &:hover {
      background-color: rgba(221, 211, 255, 1);
    }
  `,

  ColorBox3: styled.div`
    width: 30rem;
    height: 14rem;
    border-radius: 1rem;
    border: 3px solid rgba(208, 224, 255, 1);
    background: rgba(208, 224, 255, 0.4);
    color: #2b1840;
    font-size: 1.35rem;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `,
  ColorBox4: styled.div`
    width: 20rem;
    height: 10rem;
    border-radius: 1rem;
    border: 3px solid rgba(208, 224, 255, 1);
    background: rgba(208, 224, 255, 0.4);
    color: #2b1840;
    font-size: 1.35rem;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 1rem;
  `,
  ColorBox5: styled.div`
    width: 25rem;
    height: 10rem;
    border-radius: 1rem;
    border: 3px solid rgba(208, 224, 255, 1);
    background: rgba(208, 224, 255, 0.4);
    color: #2b1840;
    font-size: 1.35rem;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 1rem;
    padding-right: 3rem;
  `,
  UnderLineBoxRed: styled.div`
    border: none;
    border-bottom: 1px solid #ff2e00;
    background-color: transparent;
    height: fit-content;
    width: fit-content;
    box-sizing: border-box;
    position: relative;
  `,
  UnderLineBox2: styled.div`
    border: none;
    border-bottom: 2px solid #c0c0c0;
    background-color: transparent;
    height: 80%;
    width: fit-content;
    min-width: 2.2rem;
    box-sizing: border-box;
    position: relative;
    margin-right: 0.3rem;
    margin-left: 0.5rem;
  `,
  UnderLineBox2Input: styled.input`
    border: none;
    border-bottom: 2px solid #c0c0c0;
    background-color: transparent;
    height: 80%;
    width: fit-content;
    width: 2.5rem;
    box-sizing: border-box;
    position: relative;
    margin-right: 0.3rem;
    margin-left: 0.5rem;

    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  //2-1-3
  DivSingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 2rem;
    position: relative;
    min-height: 10rem;
    align-items: center;
    margin-left: 4rem;
  `,
  DivSingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 2rem;
    position: relative;
    min-height: 10rem;
    align-items: center;
  `,
  DivWrapper: styled.div`
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
  `,
  DivWrapper2: styled.div`
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    margin-left: -8rem;
    margin-top: -6rem;
  `,
  DivLeftCircle: styled.div`
    width: 4rem;
    height: 4rem;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 0.3rem;
    left: -1.1rem;
  `,
  DivLeftNum: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    padding-right: 0.4rem;
    margin-top: 0.2rem;
    background-color: #fff;
    width: 4rem;
    height: 4.4rem;
    position: absolute;
    top: -0.1rem;
    left: -1.42rem;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 1rem;
  `,
  DivLeftNum2: styled.div<{ isCheck: boolean }>`
    font-size: 1.5rem;
    font-weight: 600;
    padding-right: 0.4rem;
    margin-top: 0.2rem;
    background-color: ${props => (props.isCheck ? '#e6f8f0' : '#fff')};
    width: 4rem;
    height: 4.4rem;
    position: absolute;
    top: -0.1rem;
    left: -1.42rem;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 1rem;
  `,
  DivCenterNum: styled.div`
    position: absolute;
    top: 1rem;
    left: 2.8rem;
    border-top: 2px solid black;
    min-width: 5.6rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-left: -0.25rem;
    margin-top: 0.2rem;
  `,
  DivCenterNum2: styled.div`
    position: absolute;
    top: 1rem;
    left: 2.8rem;
    border-top: 2px solid black;
    min-width: 8.75rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-left: -0.25rem;
    margin-top: 0.2rem;
    letter-spacing: 1.5rem;
    padding-left: 1.3rem;
  `,
  DivTopInputWrapper: styled.div`
    position: absolute;
    top: -1.5rem;
    left: 3rem;
    display: flex;
    gap: 0.2rem;
    background-color: #fff;
  `,
  RedSpan: styled.div`
    color: #ff2e00;
    width: 100%;
  `,
  RedSpan2: styled.div`
    color: #ff2e00;
    margin-left: 0.3rem;
  `,
  BasicRedSpan: styled.div`
    color: #ff2e00;
  `,
  UnderLineBox3: styled.div`
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    height: 80%;
    width: 110%;
    min-width: 2.2rem;
    box-sizing: border-box;
    position: relative;
    margin-left: -1rem;
    padding-left: 1rem;
  `,
  //2-2-1
  AsoluteBox4: styled.div`
    position: absolute;
    top: 0;
    left: -1rem;
  `,
  //2-2-3
  AsoluteBox5: styled.div`
    position: absolute;
    top: -2.5rem;
    left: 3.4rem;
  `,
  //2-4-1
  RelativeBox2: styled.div`
    position: relative;
    & > input {
      width: 2.55rem;
      height: 2.6rem;
      position: absolute;
    }
  `,
  GetAbsoluteBox: styled.input<{ top: number; left: number }>`
    top: ${props => (props.top ? `${props.top}rem` : '')};
    left: ${props => (props.left ? `${props.left}rem` : '')};
    background-color: transparent;
    border: none;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
  `,
  //2-4-3
  AsoluteBox6: styled.div`
    position: absolute;
    top: 4.3rem;
    left: 1.3rem;
    display: flex;
    gap: 2.3rem;
  `,
  //2-5-3
  MinWidth1: styled.div`
    min-width: 7rem;
    width: fit-content;
    display: flex;
  `,
  //3권
  //3-3-2
  AbsoluteBox11: styled.div`
    position: absolute;
    top: -1.7rem;
    left: 0.5rem;
  `,
  AbsoluteBox12: styled.div`
    position: absolute;
    top: 1.3rem;
    left: 3rem;
  `,
  //3-3-3
  AbsoluteBox13: styled.div`
    position: absolute;
    top: 1.6rem;
    left: 0.7rem;
  `,
  FitBox: styled.div`
    width: fit-content;
    height: fit-content;
    line-height: 75%;
  `,
  RotateBox: styled.div<{ deg: number }>`
    transform: ${props => `rotate(${props.deg}deg)`};
  `,
  //4-1-1
  LeftAbsoluteBox: styled.div<{ left: number }>`
    position: absolute;
    top: 3.6rem;
    left: ${props => `${props.left}rem`};
  `,
};

export default Styled;
