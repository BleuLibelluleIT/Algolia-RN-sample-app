import {Button, FlatList, Modal} from 'react-native';
import {useRefinementList} from 'react-instantsearch-hooks';
import React, {useState} from 'react';
import CONFIG from 'react-native-config';
import {AlgoliaSearchCategories} from './AlgoliaSearchCategories';

export const AlgoliaSearchFilters = ({visible, setVisible}) => {
  const {items, canRefine, refine} = useRefinementList({
    attribute: CONFIG.FILTER_NAME as string,
  });
  const [brandVisible, setBrandVisible] = useState(false);

  const refineBrand = (value: string) => {
    if (canRefine) {
      refine(value);
    }
  };

  return (
    <>
      <AlgoliaSearchCategories
        setVisible={setBrandVisible}
        visible={brandVisible}
      />
      <Modal visible={visible}>
        <Button title={'close'} onPress={() => setVisible(false)} />
        <Button
          title={'Go to Categories'}
          onPress={() => setBrandVisible(true)}
        />
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
    </>
  );
};

export default AlgoliaSearchFilters;
