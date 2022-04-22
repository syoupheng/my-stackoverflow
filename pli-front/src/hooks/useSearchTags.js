import axios from 'axios';
import { useQuery } from 'react-query';

const searchTags = async search => {
  const res = await axios.get(`/forum/tags/?search=${search}`);
  return res;
}

const useSearchTags = search => {
  return useQuery(['tags', search], () => searchTags(search), {
      retry: false
  });
}

export default useSearchTags;