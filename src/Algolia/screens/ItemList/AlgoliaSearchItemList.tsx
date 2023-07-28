import React, {useState} from 'react';
import {useInfiniteHits, useSearchBox} from 'react-instantsearch-hooks';
import {Button, FlatList, Text} from 'react-native';
import AlgoliaSearchFilters from '../Filters/AlgoliaSearchFilters';

export const AlgoliaSearchItemList = () => {
  const infiniteHits = useInfiniteHits();
  const {query} = useSearchBox();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <AlgoliaSearchFilters visible={visible} setVisible={setVisible} />
      <Text>{query}</Text>
      <Button title={'Go to Filters'} onPress={() => setVisible(true)} />
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
