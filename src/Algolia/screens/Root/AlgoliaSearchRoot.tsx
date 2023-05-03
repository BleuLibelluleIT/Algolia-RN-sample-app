import {useSearchBox} from 'react-instantsearch-hooks';
import {Button, TextInput, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const AlgoliaSearchRoot = () => {
  const {query, refine, clear} = useSearchBox();
  const {navigate} = useNavigation();

  const onSubmit = () => {
    navigate('items' as never);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{backgroundColor: 'grey', flex: 1}}
        value={query}
        onChangeText={refine}
        onSubmitEditing={onSubmit}
      />
      <Button title={'clear'} onPress={clear} />
    </View>
  );
};

export default AlgoliaSearchRoot;
