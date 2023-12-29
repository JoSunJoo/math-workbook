import Single1 from './Single4-1-1';
import Single2 from './Single4-1-2';

import type { Data41QuizProps as Props } from '../../Type/Type1';

const Single41 = (props: Props) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, type } =
    props;
  if (type === 1) {
    return (
      <Single1
        id={id}
        quiz1={quiz1}
        quiz2={quiz2}
        quiz3={quiz3}
        quiz4={quiz4}
        quiz5={quiz5}
        quiz6={quiz6}
        quiz7={quiz7}
        quiz8={quiz8}
        type={type}
      />
    );
  } else {
    return (
      <Single2
        id={id}
        quiz1={quiz1}
        quiz2={quiz2}
        quiz3={quiz3}
        quiz4={quiz4}
        quiz5={quiz5}
        quiz6={quiz6}
        quiz7={quiz7}
        quiz8={quiz8}
        type={type}
      />
    );
  }
};

export default Single41;
