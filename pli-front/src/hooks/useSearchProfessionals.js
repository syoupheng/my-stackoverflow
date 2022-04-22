import axios from 'axios';
import { useQuery } from 'react-query';

const searchProfessionals = async search => {
  const res = await axios.get(`/forum/users/professionals?search=${search}`);
  return res;
}

const useSearchProfessionals = search => {
  return useQuery(['users', search], () => searchProfessionals(search), {
      retry: false
  });
}

export default useSearchProfessionals;