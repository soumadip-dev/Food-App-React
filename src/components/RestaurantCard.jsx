import { CON_URL } from '../utils/constants';

const ResturantCard = ({ resData }) => {
  // Destructure relevant data from resData
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  const imageUrl = CON_URL + cloudinaryImageId; // Construct image URL using cloudinaryImageId

  return (
    <div className="res-card">
      {/* Restaurant image */}
      <img className="res-image" src={imageUrl} alt={`${name} restaurant`} />

      {/* Restaurant name */}
      <h3 className="res-name">{name}</h3>

      {/* Average rating */}
      <p className="res-rating">{`⭐ ${avgRating}`}</p>

      {/* List of cuisines */}
      <p className="res-cuisines">{cuisines.join(', ')}</p>

      {/* Delivery time */}
      <p className="res-delivery">{`Delivery Time: ${sla.slaString}`}</p>
    </div>
  );
};

export default ResturantCard;
