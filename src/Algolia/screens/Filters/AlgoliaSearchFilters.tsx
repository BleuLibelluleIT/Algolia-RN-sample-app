import {Button, FlatList} from 'react-native';
import {useMenu} from 'react-instantsearch-hooks';
import React from 'react';
import CONFIG from 'react-native-config';

export const AlgoliaSearchFilters = () => {
  const {items, canRefine, refine} = useMenu({
    attribute: CONFIG.FILTER_NAME as string,
  });

  const refineBrand = (value: string) => {
    if (canRefine) {
      refine(value);
    }
  };

  return (
    <>
      <FlatList
        data={items}
        renderItem={item => {
          return (
            <>
              <Button
                title={item.item.label}
                onPress={() => {
                  refineBrand(item.item.value);
                }}
              />
            </>
          );
        }}
      />
    </>
  );
};

export default AlgoliaSearchFilters;
