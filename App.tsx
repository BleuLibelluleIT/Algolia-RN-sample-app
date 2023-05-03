import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlgoliaSearch from './src/Algolia/AlgoliaSearch';

function Home(): JSX.Element {
  const {navigate} = useNavigation();

  const handleOnPress = () => {
    navigate('Search' as never);
  };
  return (
    <>
      <Button onPress={handleOnPress} title={'Go to Algolia'} />
    </>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen
          name={'Search'}
          component={AlgoliaSearch}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
