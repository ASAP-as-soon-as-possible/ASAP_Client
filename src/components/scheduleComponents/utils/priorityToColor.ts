import { theme } from 'styles/theme';

//todo: type 지정 따로 빼는게 잘 안됨

/** priority 값을 받아서 색상코드로 반환하는 함수 */
const priorityToColor = (type: 'priority' | 'available', priority?: number): string => {
  if (type === 'available') return theme.colors['main4'];
  if (type === 'priority') console.log(priority);

  switch (priority) {
    case 0:
      return theme.colors['grey6'];
    case 1:
      return theme.colors['main3'];
    case 2:
      return theme.colors['main2'];
    case 3:
      return theme.colors['main1'];
    default:
      return theme.colors['grey10'];
  }
};

export default priorityToColor;
