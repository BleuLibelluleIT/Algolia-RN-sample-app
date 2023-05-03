import AlgoliaSearchRoot from './Root/AlgoliaSearchRoot';
import React from 'react';
import AlgoliaSearchItemList from './ItemList/AlgoliaSearchItemList';
import AlgoliaSearchFilters from './Filters/AlgoliaSearchFilters';
import {useInstantSearch} from 'react-instantsearch-hooks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AlgoliaSearchStack = () => {
  const instantSearch = useInstantSearch();

  console.log(instantSearch.indexUiState); // Can see data loss between screen

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name={'search'} component={AlgoliaSearchRoot} />
        <Stack.Screen name={'items'} component={AlgoliaSearchItemList} />
        <Stack.Screen name={'filters'} component={AlgoliaSearchFilters} />
      </Stack.Navigator>
    </>
  );
};

export default AlgoliaSearchStack;
