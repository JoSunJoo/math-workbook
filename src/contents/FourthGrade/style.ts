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
  SetCenter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
  FlexEndBox1: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3rem;
  `,
  MarginBottomBox: styled.div`
    margin-bottom: 3rem;
  `,
  MarginBottomBox2: styled.div`
    margin-bottom: 2rem;
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
  TextSize: styled.div`
    font-size: 1.25rem;
    font-weight: 600;
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
  ImgBox1: styled.div`
    width: 40vw;
    padding: 3rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default Styled;
