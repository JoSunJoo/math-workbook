import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade11: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', '', ''],
    '3': ['', '', ''],
    '4': ['', '', ''],
    '5': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['17', '5', '12'],
    '2': ['14', '5', '9'],
    '3': ['12', '6', '6'],
    '4': ['9', '4', '5'],
    '5': ['8', '3', '5'],
  };
  const handleChange = (questionId: string, index: number, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: answers[questionId].map((item, i) =>
        i === index ? value : item
      ),
    });
  };

  const [showResults, setShowResults] = useState(false);

  const isCorrect = (questionId: string) => {
    return correctAnswers[questionId].every(
      (answer, index) => answer === answers[questionId][index]
    );
  };

  const handleGrade = () => {
    setShowResults(true);
  };
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll asdfasdf242">
        <div className="quiz241Ex">
          <div className="flexRow nowrap1">
            <div className="flexcol nowrap1">
              <div className="textLLeft fontSize20">
                28보다 크고 57보다 작은 수 중에서 3의 배수의 개수
              </div>
              <div className="flexRow quizNumber123522">
                <div className="borderColor233 margin2410 quizNumber1235">
                  18
                </div>
                -
                <div className="borderColor233 margin2410 quizNumber1235">
                  9
                </div>
                =
                <div className="borderColor233 margin2410 quizNumber1235">
                  9
                </div>
                (개)
              </div>
              <div className="flexRow">
                <div className="Red233 fontSize20">56÷3=18…2</div>
                <div className="Red233 fontSize20 marginwerq2452">28÷3=9…1</div>
              </div>
            </div>
            <div className="flexcol elemet2411">
              <p className="fontSize20">
                1에서 56까지 3의 배수가 18개, 1에서 28까지 3의 배수가 9개이므로
                29에서 56까지의 수에는 3의 배수는 모두 18-9=9(개)가 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="marginTop231 lakwerfj3214">
          <div className="quizNumber123887">
            <p className="fontSize20">
              ① 21보다 크고 70보다 작은 수 중에서 4의 배수의 개수
            </p>
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              value={answers['1'][2]}
              onChange={e => handleChange('1', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20">
              ② 35보다 크고 90보다 작은 수 중에서 6의 배수의 개수
            </p>
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              value={answers['2'][2]}
              onChange={e => handleChange('2', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20">
              ③ 50보다 크고 100보다 작은 수 중에서 8의 배수의 개수
            </p>
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              value={answers['3'][2]}
              onChange={e => handleChange('3', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20">
              ④ 40보다 크고 90보다 작은 수 중에서 9의 배수의 개수
            </p>
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              value={answers['4'][2]}
              onChange={e => handleChange('4', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20">
              ⑤ 37보다 크고 100보다 작은 수 중에서 12의 배수의 개수
            </p>
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              value={answers['5'][2]}
              onChange={e => handleChange('5', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade11;
