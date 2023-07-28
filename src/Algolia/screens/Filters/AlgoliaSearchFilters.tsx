import {Button, FlatList} from 'react-native';
import {useInstantSearch, useRefinementList} from 'react-instantsearch-hooks';
import React, {useEffect, useRef} from 'react';
import CONFIG from 'react-native-config';

export const AlgoliaSearchFilters = () => {
  const {items, canRefine, refine} = useRefinementList({
    attribute: CONFIG.FILTER_NAME as string,
  });

  const {uiState, setUiState} = useInstantSearch();
  const uiStateRef = useRef(uiState);

  useEffect(() => {
    uiStateRef.current = uiState;
  }, [uiState]);

  useEffect(() => {
    return () => {
      setTimeout(() => setUiState(uiStateRef.current));
    };
  }, [setUiState]);

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
