import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade06: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
    '6': [''],
    '7': [''],
    '8': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3'],
    '2': ['3'],
    '3': ['3'],
    '4': ['3'],
    '5': ['4'],
    '6': ['2'],
    '7': ['4'],
    '8': ['3'],
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
      <div className="quizAll">
        <div className="quiz">
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">①</p>
            <div className="fifthGrade223Grid">
              <div>12</div>
              <div>28</div>
              <div>2</div>
              <div>33</div>
              <div>21</div>
              <div>3</div>
              <div>8</div>
              <div>37</div>
            </div>
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">②</p>
            <div className="fifthGrade223Grid">
              <div>6</div>
              <div>23</div>
              <div>62</div>
              <div>70</div>
              <div>67</div>
              <div>75</div>
              <div>97</div>
              <div>66</div>
            </div>
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">③</p>
            <div className="fifthGrade223Grid">
              <div>50</div>
              <div>53</div>
              <div>55</div>
              <div>18</div>
              <div>17</div>
              <div>96</div>
              <div>27</div>
              <div>11</div>
            </div>
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">④</p>
            <div className="fifthGrade223Grid">
              <div>35</div>
              <div>29</div>
              <div>69</div>
              <div>83</div>
              <div>85</div>
              <div>41</div>
              <div>80</div>
              <div>24</div>
            </div>
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">⑤</p>
            <div className="fifthGrade223Grid">
              <div>71</div>
              <div>25</div>
              <div>5</div>
              <div>74</div>
              <div>73</div>
              <div>51</div>
              <div>32</div>
              <div>47</div>
            </div>
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">⑥</p>
            <div className="fifthGrade223Grid">
              <div>13</div>
              <div>30</div>
              <div>9</div>
              <div>15</div>
              <div>59</div>
              <div>77</div>
              <div>4</div>
              <div>58</div>
            </div>
            <input
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">⑦</p>
            <div className="fifthGrade223Grid">
              <div>26</div>
              <div>89</div>
              <div>31</div>
              <div>63</div>
              <div>79</div>
              <div>36</div>
              <div>7</div>
              <div>64</div>
            </div>
            <input
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231">⑧</p>
            <div className="fifthGrade223Grid">
              <div>52</div>
              <div>43</div>
              <div>22</div>
              <div>19</div>
              <div>65</div>
              <div>61</div>
              <div>49</div>
              <div>10</div>
            </div>
            <input
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade06;
