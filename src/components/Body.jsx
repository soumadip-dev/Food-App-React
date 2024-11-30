import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerCart from "./ShimmerCart";

const Body = () => {
  // State variable to store restaurant data
  const [listOfResturant, setListOfResturant] = useState([]);
  const [fileredResturant, setFileredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState(false);

  // Fetch data from the API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch restaurant data
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await response.json();

    // Set fetched data to state
    setListOfResturant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    setFileredResturant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  return listOfResturant.length === 0 ? (
    // Show shimmer effect while data is loading
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
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredResturant = listOfResturant.filter((res) => {
                const resName = res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());

                const resCuisines = res.info.cuisines.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase()),
                );
                return resName || resCuisines;
              });
              setFileredResturant(filteredResturant);
              setSearchError(filteredResturant.length === 0);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-res"
          onClick={() => {
            // Filter the list to show only top-rated restaurants
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfResturant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      {/* Display Restaurants */}
      <div className="res-container">
        {searchError && (
          <div className="no-results">
            <p>Not Present</p> {/* Message when no results are found */}
          </div>
        )}
        {fileredResturant.map((resturant) => (
          // Render each restaurant card
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
