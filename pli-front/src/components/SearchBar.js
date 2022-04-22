import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const handleInputChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/results?search=${search}`);
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="header_input">
          <SearchIcon />
          <input
            placeholder="Rechercher"
            type="text"
            value={search}
            onChange={handleInputChange}
          />
        </div>
      </form>
    );
}

export default SearchBar;