import { getKeyValue } from '@elice/extcontent-apis';

interface Props {
  key: string;
  setInputValue: any;
  setIsGeted?: React.Dispatch<React.SetStateAction<boolean>>;
  isGeted?: boolean;
}

export const GetData = async (props: Props) => {
  const { setInputValue, key, setIsGeted, isGeted } = props;

  if (!isGeted) {
    try {
      const res = await getKeyValue({ key });
      if (res !== null) {
        // console.log('res');
        // console.log(savedAnswers);
        setInputValue(res);
        if (setIsGeted) setIsGeted(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  // getKeyValue({ key })
  //   .then(savedAnswers => {
  //     if (savedAnswers) {
  //       console.log('res');
  //       console.log(savedAnswers);
  //       setInputValue(savedAnswers);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error loading saved answers:', error);
  //   });
};
