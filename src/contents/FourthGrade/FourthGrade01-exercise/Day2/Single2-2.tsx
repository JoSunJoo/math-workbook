import Single1 from './Single2-2-1';
import Single2 from './Single2-2-2';

import type { Data22QuizProps as QuizProps } from '../../Type/Type1';

const Single22 = (props: QuizProps) => {
  const { id, type, quiz1, quiz2, quiz3, quiz4, quiz5 } = props;
  if (type === 1) {
    return <Single1 id={id} quiz1={quiz1} />;
  } else {
    return (
      <Single2
        id={id}
        quiz1={quiz1}
        quiz2={quiz2}
        quiz3={quiz3}
        quiz4={quiz4}
        quiz5={quiz5}
      />
    );
  }
};

export default Single22;
