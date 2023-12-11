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
    margin: 0 auto;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  ColGapBox3: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
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
    gap: 3rem;
    align-items: center;
    margin-left: 3.5rem;
    & > div {
      width: 40%;
      justify-content: center;
    }
  `,
  RowWrapBox4: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  `,
  RowWrapBox5: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 35%;
      justify-content: center;
    }
  `,
  RowBox: styled.div`
    display: flex;
  `,
  RowBox2: styled.div`
    display: flex;
    gap: 1rem;
    width: 80%;
  `,
  RowBox3: styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
  `,
  RowBox4: styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    gap: 1rem;
  `,
  RowBox5: styled.div`
    display: flex;
    height: 2.67rem;
    align-items: flex-end;
    gap: 1rem;
  `,
  RowBox6: styled.div`
    display: flex;
    width: 85%;
  `,
  RowBox7: styled.div`
    display: flex;
    gap: 0.6rem;
  `,
  RowBox8: styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    gap: 1rem;
  `,
  RowBox9: styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    gap: 2rem;
  `,
  RowBox10: styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    gap: 0.6rem;
    align-items: center;
  `,
  RowBox11: styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    gap: 4.5rem;
  `,
  RowBox12: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  `,

  RowBox13Upper: styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    top: -1.2rem;
    left: 0;
  `,
  RowBox13Lower: styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    top: 1.7rem;
    right: 3.2rem;
  `,

  RedFont1: styled.div`
    color: #ff2e00;
    padding-left: 0.8rem;
    margin-top: 0.2rem;
    width: 100%;
  `,
  SetCenter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,

  ExampleBox1: styled.div`
    //긴 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 11.375rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox2: styled.div`
    //짧은 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 25rem;
    height: 18rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox3: styled.div`
    //길고 높은 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 13rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox4: styled.div`
    //길고 낮은 example box
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 9rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
  `,
  ExampleBox5: styled.div`
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
  ExampleBox6: styled.div`
    //좀 더 큰 예제박스
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    border: 1px solid #c0c0c0;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;
  `,
  ExampleBox7: styled.div`
    //절반 사이즈 문제와 동일한 사이즈의 예제
    width: 35%;
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
  ExampleExplain1: styled.div`
    position: absolute;
    color: #ff2e00;
    font-size: 1rem;
    top: 1.7rem;
    right: 14.5rem;
    display: flex;
    gap: 3.6rem;
  `,
  DashSingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    position: relative;
    padding-top: 5rem;
  `,
  SingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    position: relative;
  `,
  SingleWrapper2: styled.div`
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
    background-color: #eff5ff;
    position: relative;
  `,
  SingleWrapper3: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: #eff5ff;
    position: relative;
  `,
  SingleWrapper4: styled.div`
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
  SingleWrapper5: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    position: relative;
  `,
  MiniSingleWrapper: styled.div`
    width: 30%;
    max-width: 16.875rem;
    height: fit-content;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    position: relative;
    padding: 2rem;
    margin: 0 5%;
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
  PaddingBox2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    padding: 4rem 0;
    align-items: center;
    justify-content: center;
  `,
  PaddingBox3: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
  `,
  InputWrapper: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    align-items: center;
  `,
  InputWrapper2: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
  `,
  InputWrapper3: styled.div`
    display: flex;
    gap: 0.75rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    align-items: center;
  `,
  RowInputWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  `,
  ExplainInputBox1: styled.div`
    width: 4.8125rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #ff2e00;
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
  InputBox2: styled.input`
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
  InputBox6: styled.input`
    width: 2.5rem;
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
  SpacingInputBox1: styled.input`
    width: 4.8125rem;
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
    letter-spacing: 0.3rem;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  TopLineInput: styled.div`
    border: none;
    border-top: 2px solid #c0c0c0;
    outline: none;
    background-color: transparent;
    height: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 40%;
    text-align: center;
    letter-spacing: 0.55rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    padding-top: 0.3rem;
  `,
  TopLineInput2: styled.div`
    border: none;
    border-top: 2px solid #c0c0c0;
    outline: none;
    background-color: transparent;
    height: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    letter-spacing: 0.55rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    padding-top: 0.3rem;
  `,
  InputExplainWrapper: styled.div<{ left?: number }>`
    display: flex;
    gap: 2.6rem;
    margin-bottom: 0.25rem;
    padding-left: ${props => (props.left ? `${props.left}rem` : '')};
  `,
  InputExplain: styled.div`
    width: 4.8125rem;
    height: fit-content;
    color: #ff2e00;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
  `,
  Line: styled.div`
    color: #6297ff;
  `,
  QuestionBox: styled.div`
    padding: 0.375rem 0.6rem;
    border-bottom: 1px solid #6297ff;
    width: fit-content;
    height: fit-content;
  `,
  LineWrppaer1: styled.div`
    width: 17.5rem;
    height: 4rem;
    position: relative;
  `,
  IdNumBox: styled.div`
    position: absolute;
    top: 1.8rem;
    left: 1.2rem;
    font-size: 1.35rem;
  `,
  IdNumBox2: styled.div`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-size: 1.35rem;
  `,
  IdNumBox3: styled.div`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-size: 1.7rem;
  `,
  IdNumBox4: styled.div`
    margin-right: 1rem;
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
    white-space: pre-wrap;
    line-height: 150%;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.1rem;
  `,
  TextBox4: styled.div`
    line-height: 150%;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  `,
  TextSize: styled.div`
    font-size: 1.25rem;
    font-weight: 600;
  `,
  InnerTextBox: styled.div`
    width: 100%;
    white-space: pre-wrap;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: rgba(193, 193, 193, 0.2);
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    margin-top: 1rem;
  `,

  InnerColBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 0.5rem;
    margin: 0 1rem;
  `,
  AngleShapeBox: styled.div`
    position: relative;
    width: 1.3rem;
    height: 3rem;
    display: flex;
  `,
  AngleShapeLeft: styled.div`
    height: 3rem;
    width: 0.6rem;
    border: 1px solid #c0c0c0;
    border-right: none !important;
    position: absolute;
    top: 0.2rem;
    left: 1rem;
  `,
  AngleLineLeft: styled.div`
    border-bottom: 1px solid #c0c0c0;
    width: 1rem;
    height: 0;
    position: absolute;
    top: 1.8rem;
    left: 0;
  `,
  AngleShapeRight: styled.div`
    height: 3rem;
    width: 0.6rem;
    border: 1px solid #c0c0c0;
    border-left: none !important;
    position: absolute;
    top: 0.2rem;
    right: 1rem;
  `,
  AngleLineRight: styled.div`
    border-bottom: 1px solid #c0c0c0;
    width: 1rem;
    height: 0;
    position: absolute;
    top: 1.8rem;
    right: 0;
  `,
  LetterSpacing: styled.div`
    letter-spacing: 0.5rem;
    text-align: right;
    width: 100%;
  `,
  LetterSpacing2: styled.div`
    letter-spacing: 2.5rem;
    margin-left: 1.8rem;
    text-align: right;
    width: 100%;
  `,
  LetterSpacing3: styled.div`
    letter-spacing: 2.5rem;
    text-align: right;
    width: 40%;
  `,
  RightDashBorder: styled.div`
    width: 3rem;
    height: 9rem;
    margin-right: 0.5rem;
    border-right: 1.5px dashed #c0c0c0;
  `,
  RightDashBorderWrapper: styled.div`
    position: relative;
  `,
  DashNumWrapper: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  `,
  DashNumMid: styled.div`
    width: 93%;
    display: flex;
    justify-content: space-between;
    padding-left: 1.2rem;
  `,
  DashNumMid2: styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding-left: 1.2rem;
  `,
  DashBoxMidLine: styled.div`
    width: 110%;
    height: 0.125rem;
    background-color: black;
  `,
  DashBoxMidLine2: styled.div`
    width: 105%;
    height: 0.125rem;
    background-color: black;
  `,
  DashBoxUpper: styled.input`
    position: absolute;
    top: -3rem;
    left: 3.4rem;
    border: 2px solid #d0e0ff;
    border-radius: 0.4rem;
    background-color: #eff5ff;
    width: 2.5rem;
    height: 2.3125rem;
    outline: none;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  `,
  ColorBox: styled.div`
    background-color: #d0e0ff;
    padding: 0 0.5rem;
    border-radius: 0.55rem;
  `,
  NumBox1: styled.div<{ color?: string }>`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.color ? props.color : '#F4F0FF')};
  `,
  NumBox2: styled.div<{ color?: string }>`
    width: 4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #747373;
    border-top: 1px solid #747373;
    background-color: ${props => (props.color ? props.color : '#F4F0FF')};
  `,
  NumBox3: styled.input`
    width: 4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-left: 1px solid #747373;
    border-top: 1px solid #747373;
    background-color: rgba(98, 151, 255, 0.3);
    outline: none;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  `,
  NumBox2Input: styled.div<{ noBottom?: boolean; noRight?: boolean }>`
    width: 4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #747373;
    border-bottom: ${props => (props.noBottom ? 'none' : ' ')};
    border-right: ${props => (props.noRight ? 'none' : ' ')};
    background-color: #fff;
  `,
  NumBox3Input: styled.input<{ noBottom?: boolean; noRight?: boolean }>`
    width: 4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #747373;
    border-bottom: ${props => (props.noBottom ? 'none' : ' ')};
    border-right: ${props => (props.noRight ? 'none' : ' ')};
    background-color: #fff;
    outline: none;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  `,
  TempSize1: styled.div`
    width: 4.8rem;
    height: fit-content;
    padding-bottom: 2rem;
  `,

  SelectSingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    width: 100%;
    min-height: 3rem;
    height: fit-content;
    border-radius: 1rem;
    display: flex;
    background-color: #fff;
    position: relative;
    border: 2px solid #c0c0c0;
    & > div {
      width: 25%;
    }
    & > div:first-of-type > label {
      border-radius: 1rem 0 0 1rem;
    }
    & > div:last-of-type > label {
      border-radius: 0 1rem 1rem 0;
      border-right: none !important;
    }

    & > div > input {
      width: 0;
      height: 0;
      display: none;
      &:checked + label {
        background-color: #e6f8f0;
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
    border-right: 2px dashed #c0c0c0 !important;
    &:hover {
      background-color: #e6f8f0;
    }
  `,

  SelectSingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    width: 100%;
    min-height: 3rem;
    height: fit-content;
    border-radius: 1rem;
    display: flex;
    background-color: #fff;
    position: relative;
    border: 2px solid #c0c0c0;
    & > div:first-of-type > label {
      border-radius: 1rem 0 0 1rem;
    }
    & > div:last-of-type > label {
      border-radius: 0 1rem 1rem 0;
      border-right: none !important;
    }

    & > div {
      min-width: 12.5rem;
    }
    & > div > label {
      padding-top: 1rem;
    }
    & > div > input {
      width: 0;
      height: 0;
      display: none;
      &:checked + label {
        background-color: #e6f8f0;
      }
    }
  `,
  SelectSingleButton2: styled.label`
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    flex-grow: 1;
    outline: none;
    width: 100%;
    height: 100%;
    border-right: 2px dashed #c0c0c0 !important;
  `,

  //4권
  DivSingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 2rem;
    position: relative;
    min-height: 10rem;
  `,
  DivSingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 2rem;
    position: relative;
    min-height: 3rem;
  `,
  DivWrapper: styled.div`
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    margin-right: 9rem;
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
  DivTopInputWrapper: styled.div`
    position: absolute;
    top: -1.5rem;
    left: 3rem;
    display: flex;
    gap: 0.2rem;
    background-color: #fff;
  `,
  BorderBox1: styled.div`
    border: 1.5px solid #c0c0c0;
    border-radius: 1rem;
    padding: 2rem;
    width: 70%;
    padding-bottom: 3rem;
  `,
  //5권
  BorderBox2: styled.div`
    border-radius: 1rem;
    background-color: rgba(98, 151, 255, 0.4);
    width: fit-content;
    height: fit-content;
    padding: 0 0.5rem;
  `,
  //6권
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
  CountWrapper: styled.div`
    width: 80%;
    display: flex;
  `,
  CountBtn: styled.button<{ checked: string }>`
    border: ${props =>
      props.checked === '#6297FF' ? '2px solid #6297FF' : '1px dashed #c0c0c0'};
    border-left: none;
    border-collapse: collapse;
    width: 2rem;
    height: 2rem;
    background-color: ${props =>
      props.checked === '#6297FF' ? '#D0E0FF' : 'rgba(192, 192, 192, 0.1)'};
    &:first-of-type {
      border-left: ${props =>
        props.checked === '#6297FF'
          ? '2px solid #6297FF'
          : '1px dashed #c0c0c0'};
    }

    border-right: ${props =>
      props.checked === '#6297FF' ? '2px solid #6297FF' : '1px dashed #c0c0c0'};
  `,
  CountExample: styled.div`
    display: flex;
    & > div {
      border: 1px dashed #c0c0c0;
      border-collapse: collapse;
      width: 1.3rem;
      height: 1.3rem;
      font-size: 0.8rem;
      text-align: center;
    }

    .color {
      border: 1px solid #6297ff;
      border-right: none;
      background-color: #d0e0ff;
    }
    .last-color {
      border: 1px solid #6297ff;
      background-color: #d0e0ff;
    }
  `,
  BlueSpan: styled.div`
    color: #6297ff;
  `,
  GreenSpan: styled.div`
    color: #00b76a;
    line-height: 95%;
    font-weight: 500;
  `,
  BoldSpan: styled.div`
    font-size: 1.15rem;
  `,
};

export default Styled;
