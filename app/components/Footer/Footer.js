import React from 'react';
import { View } from 'react-native';
import FilterLink from '.../containers/FilterLink';

const Footer = () => (
  <View>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </View>
);

export default Footer;
