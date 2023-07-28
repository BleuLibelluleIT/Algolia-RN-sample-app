# React Native Algolia Sample App


## Installation:
install dependencies with
```yarn```

Create .env with your own keys:
```
ALGOLIA_API_KEY=
ALGOLIA_APP_ID=
FILTER_NAME=
FILTER_NAME_2=
INDEX_NAME=
```

Start server with
```yarn start```

Build on android
```yarn android```

Build on IOS (not tested)
```yarn ios```

## Debug
You can press ``d`` in the server window to display logs in a browser console

The only console.log is located in [here](./src/Algolia/screens/AlgoliaSearchStack.tsx), it shows the current state of the Algolia process

You can see that data is lost when you go back to a previous screen

## Details

To go from the Search Bar to the list of items you can either: press enter or press the confirm button on phone keyboards
