import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import TopicList from '../components/TopicList';
import SidebarRow from '../components/SidebarRow';

const fetchSearchResults = async search => {
  const res = await axios.get(`/forum/topics?search=${search}`);
  return res;
}

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const { data, status, error } = useQuery(['searchResults', search], () => fetchSearchResults(search));
  const results = data || [];
  return (
    <div>
      {status === 'loading' && (
        'Loading...'
      )}

      {status === 'error' && (
        <p>Error fetching data : {error.message}</p>
      )}

      {status === 'success' && (
        <>
        <SidebarRow
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png"
        />
        <TopicList topics={results.data}/>
        </>
      )}
    </div>
  );
}

export default SearchResults;