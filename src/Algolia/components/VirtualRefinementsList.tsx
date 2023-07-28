import {useRefinementList} from 'react-instantsearch-hooks';
import CONFIG from 'react-native-config';

export const VirtualRefinementsList = () => {
  useRefinementList({attribute: CONFIG.FILTER_NAME as string});
  return null;
};
