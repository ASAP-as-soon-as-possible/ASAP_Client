import { theme } from 'styles/theme';

//todo: type 지정 따로 빼는게 잘 안됨
const priorityToColor = (type: 'priority' | 'available', priority?: number): string => {
  console.log(priority);
  switch (priority) {
    case 0:
      return type === 'priority' ? theme.colors['grey6'] : theme.colors['main4'];
    case 1:
      return theme.colors['main1'];
    case 2:
      return theme.colors['main2'];
    case 3:
      return theme.colors['main3'];
    default:
      return theme.colors['grey10'];
  }
};

export default priorityToColor;
