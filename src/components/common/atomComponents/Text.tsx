import styled from 'styled-components';

interface ValueProps {
  children: string | string[] | number;
  font: string;
  color?: string;
}

function Text({ children, font, color }: ValueProps) {
  return (
    <TextWrapper $font={font} $color={color || 'defaultColor'}>
      {children}
    </TextWrapper>
  );
}

export default Text;

const TextWrapper = styled.span<{ $font: string; $color: string }>`
  display: flex;
  align-items: center;
  /*문제 생기면 빼는 속성 글자 내림 */
  word-break: keep-all;
  color: ${({ $color }) => $color};
  ${({ $font, theme }) => {
    switch ($font) {
      case 'head1':
        return theme.fonts.head1;
      case 'head2':
        return theme.fonts.head2;
      case 'title1':
        return theme.fonts.title1;
      case 'title2':
        return theme.fonts.title2;
      case 'body1':
        return theme.fonts.body1;
      case 'body2':
        return theme.fonts.body2;
      case 'body3':
        return theme.fonts.body3;
      case 'body4':
        return theme.fonts.body4;
      case 'button1':
        return theme.fonts.button1;
      case 'button2':
        return theme.fonts.button2;
      default:
        return '';
    }
  }};
`;
