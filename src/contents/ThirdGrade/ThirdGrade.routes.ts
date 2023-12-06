import { createEliceExtRoutes } from '@elice/extcontent-utils';

export default createEliceExtRoutes([
  {
    path: 'quiz1-1-1',
    component: import('./ThirdGrade01-exercise/Day1/ThirdGrade1-1'),
  },
  {
    path: 'quiz1-1-2',
    component: import('./ThirdGrade01-exercise/Day1/ThirdGrade1-2'),
  },
  {
    path: 'quiz1-1-3',
    component: import('./ThirdGrade01-exercise/Day1/ThirdGrade1-3'),
  },
  {
    path: 'quiz1-2-1',
    component: import('./ThirdGrade01-exercise/Day2/ThirdGrade2-1'),
  },
  {
    path: 'quiz1-2-2',
    component: import('./ThirdGrade01-exercise/Day2/ThirdGrade2-2'),
  },
  {
    path: 'quiz1-2-3',
    component: import('./ThirdGrade01-exercise/Day2/ThirdGrade2-3'),
  },
  // {
  //   path: 'quiz1-3-1',
  //   component: import('./ThirdGrade01-exercise/Day3/ThirdGrade3-1'),
  // },
  {
    path: 'quiz1-3-2',
    component: import('./ThirdGrade01-exercise/Day3/ThirdGrade3-2'),
  },
  {
    path: 'quiz1-3-3',
    component: import('./ThirdGrade01-exercise/Day3/ThirdGrade3-3'),
  },
  //   {
  //   path: 'quiz1-4-1',
  //   component: import('./ThirdGrade01-exercise/Day4/ThirdGrade4-1'),
  // },
  {
    path: 'quiz1-4-2',
    component: import('./ThirdGrade01-exercise/Day4/ThirdGrade4-2'),
  },
  {
    path: 'quiz1-4-3',
    component: import('./ThirdGrade01-exercise/Day4/ThirdGrade4-3'),
  },
  // {
  //   path: 'quiz1-5-1',
  //   component: import('./ThirdGrade01-exercise/Day5/ThirdGrade5-1'),
  // },
  // {
  //   path: 'quiz1-5-2',
  //   component: import('./ThirdGrade01-exercise/Day5/ThirdGrade5-2'),
  // },
  {
    path: 'quiz1-5-3',
    component: import('./ThirdGrade01-exercise/Day5/ThirdGrade5-3'),
  },
]);
