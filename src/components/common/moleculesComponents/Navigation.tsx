import React from 'react';

import Text from 'components/common/atomComponents/Text';
import { Link } from 'react-router-dom';
import { theme } from 'styles/theme';

interface NavigationOption {
  title: string;
  url: string;
}

interface NavigationProps {
  navigationOptions: NavigationOption[];
}

function Navigation({ navigationOptions }: NavigationProps) {
  return (
    <>
      {navigationOptions.map((option, i) => (
        <Link
          to={option.url}
          key={i + option.title}
          target={option.title === '피드백 보내기' ? '_blank' : ''}
        >
          <Text font={'title2'} color={theme.colors.white}>
            {option.title}
          </Text>
        </Link>
      ))}
    </>
  );
}

export default Navigation;
