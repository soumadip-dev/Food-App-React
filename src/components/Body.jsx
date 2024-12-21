import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import OnlineStatus from './OnlineStatus';
import RestaurantCard from './RestaurantCard';
import ShimmerCart from './ShimmerCart';

const Body = () => {
  // State variables to store restaurant data
  const [listOfResturant, setListOfResturant] = useState([]);
  const [fileredResturant, setFileredResturant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchError, setSearchError] = useState(false);
  const [isTopRatedActive, setIsTopRatedActive] = useState(false);

  // Fetch data from the API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch restaurant data
  const fetchData = async () => {
    try {
      // Original
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      // Cors anywher
      // const response = await fetch(
      //   'https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      // );
      // Thin Proxy
      // const response = await fetch(
      //   'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      // );
      const json = await response.json();

      // Set fetched data to state
      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        setListOfResturant(restaurants);
        setFileredResturant(restaurants);
      } else {
        console.error('No restaurant data found');
        setListOfResturant([]);
        setFileredResturant([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setListOfResturant([]);
      setFileredResturant([]);
    }
  };

  // Function to handle search
  const handleSearch = () => {
    const filteredResturant = listOfResturant.filter(res => {
      const resName = res.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const resCuisines = res.info.cuisines.some(cuisine =>
        cuisine.toLowerCase().includes(searchText.toLowerCase())
      );
      return resName || resCuisines;
    });
    setFileredResturant(filteredResturant);
    setSearchError(filteredResturant.length === 0);
  };

  // Function to handle top-rated restaurants filter
  const handleTopRated = () => {
    if (isTopRatedActive) {
      setFileredResturant(listOfResturant);
    } else {
      const filteredList = listOfResturant.filter(
        res => res.info.avgRating > 4.6
      );
      setFileredResturant(filteredList);
      setSearchError(filteredList.length === 0); // Update searchError if no results
    }
    setIsTopRatedActive(!isTopRatedActive);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <OnlineStatus />;

  // Check if listOfResturant is empty before rendering
  if (!Array.isArray(listOfResturant)) {
    return <ShimmerCart />;
  }

  return listOfResturant.length === 0 ? (
    <ShimmerCart />
  ) : (
    <div className="body">
      {/* Filter Section */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants, cuisines..."
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
              setSearchError(false); // Reset search error when input changes
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="top-rated-res" onClick={handleTopRated}>
          Top rated Restaurant
        </button>
      </div>

      {/* Display Restaurants */}
      <div className="res-container">
        {searchError && (
          <div className="no-results">
            <p>Not Present</p>
          </div>
        )}
        {fileredResturant.map(resturant => (
          <Link
            key={resturant.info.id}
            to={'/restaurants/' + resturant.info.id}
          >
            <RestaurantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
