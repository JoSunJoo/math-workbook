import { postKeyValue } from '@elice/extcontent-apis';

// export const postDataUtil = async (key: any, value: any) => {
//   const data = {
//     key: key,
//     value: value,
//   };
//   try {
//     const response = await postKeyValue(data);
//     console.log(response);
//   } catch (error) {
//     console.error(error);;
//   }
// };

export const postDataUtil = async (key: any, value: any) => {
  postKeyValue({ key, value })
    .then(response => {
      // console.log('Success:', response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
