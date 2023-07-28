import React from 'react';
import {useRefinementList} from 'react-instantsearch-hooks';
import {Button, FlatList, Modal} from 'react-native';
import CONFIG from 'react-native-config';

export const AlgoliaSearchCategories = ({visible, setVisible}) => {
  const {items, canRefine, refine} = useRefinementList({
    attribute: CONFIG.FILTER_NAME_2 as string,
  });
  const refineBrand = (value: string) => {
    if (canRefine) {
      refine(value);
    }
  };

  return (
    <Modal visible={visible}>
      <Button title={'close'} onPress={() => setVisible(false)} />
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
    </Modal>
  );
};
