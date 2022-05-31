import './index.css';
import arrow from '../../images/icon-arrow.svg';

function Search() {
    return (
        <div className="SearchContainer">
            <label htmlFor="searchInput">IP Address Tracker</label>
            <div className="inputContainer">
                <input type="text" name='searchInput' placeholder='Search for any IP address or domain' />
                <button type='button'> <img src={arrow} alt=">" /> </button>
            </div>
        </div>
    )
}

export default Search;