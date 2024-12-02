import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API, MENU_IMG_URL, MENU_IMG_URL_NA } from '../utils/constants';
import ShimmeResturant from './ShimmerResturant';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setResInfo(data?.data);
    console.log(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2 || 1]
        ?.card?.card?.itemCards
    );
  };
  if (resInfo === null) return <ShimmeResturant />;

  const {
    name = 'Restaurant Name',
    cuisines = [],
    costForTwoMessage = 'Cost information not available',
    avgRating = 'N/A',
    totalRatingsString = 'No ratings',
    areaName = 'Location not available',
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  const slaString =
    resInfo?.cards?.[2]?.card?.card?.info?.sla?.slaString ||
    'Delivery time not available';

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-info">
        <h1 className="restaurant-name">{name}</h1>
        <p className="restaurant-meta">
          ({cuisines.join(', ') || 'No cuisines'})
        </p>
        <p className="restaurant-meta">
          ⭐ {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </p>
        <p className="restaurant-location">📍 Outlet: {areaName}</p>
        <p className="restaurant-delivery-time">🚚 Delivery: {slaString}</p>
      </div>

      <div className="menu-section">
        <h2 className="menu-title">Menu</h2>
        <ul className="menu-list">
          {itemCards.length > 0 ? (
            itemCards.map((item, index) => (
              <li key={item.card?.info?.id || index} className="menu-item">
                <div className="item-content">
                  <span className="item-name">
                    {item.card?.info?.name || 'Not present'}
                  </span>
                  <span className="item-price">
                    ₹
                    {item?.card?.info?.finalPrice / 100 ||
                      item?.card?.info?.defaultPrice / 100 ||
                      item?.card?.info?.price / 100 ||
                      '99'}
                  </span>
                  <span className="item-description">
                    {item.card?.info?.description ||
                      ''}
                  </span>
                </div>
                <div className="item-image">
                  <img
                    src={
                      item?.card?.info?.imageId === undefined
                        ? MENU_IMG_URL_NA
                        : MENU_IMG_URL + item?.card?.info?.imageId
                    }
                    alt=""
                  />
                </div>
              </li>
            ))
          ) : (
            <li className="menu-item">No Menu Available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
