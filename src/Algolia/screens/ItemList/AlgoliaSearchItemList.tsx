import React from 'react';
import {useInfiniteHits, useSearchBox} from 'react-instantsearch-hooks';
import {Button, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const AlgoliaSearchItemList = () => {
  const infiniteHits = useInfiniteHits();
  const {query} = useSearchBox();
  const {navigate} = useNavigation();

  const handleOnPress = () => {
    navigate('filters' as never);
  };

  return (
    <>
      <Text>{query}</Text>
      <Button title={'Go to Filters'} onPress={handleOnPress} />
      <FlatList
        data={infiniteHits.hits}
        renderItem={item => {
          return (
            <>
              <Text>{item.item.name as string}</Text>
            </>
          );
        }}
      />
    </>
  );
};
export default AlgoliaSearchItemList;
