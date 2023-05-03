import {InstantSearch} from 'react-instantsearch-hooks';
import algoliasearch from 'algoliasearch';
import CONFIG from 'react-native-config';
import React from 'react';
import AlgoliaSearchStack from './screens/AlgoliaSearchStack';

const algoliaSearchClient = algoliasearch(
  CONFIG.ALGOLIA_APP_ID as string,
  CONFIG.ALGOLIA_API_KEY as string,
);

export const AlgoliaSearch = () => {
  return (
    <InstantSearch
      indexName={CONFIG.INDEX_NAME as string}
      searchClient={algoliaSearchClient}>
      <AlgoliaSearchStack />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
