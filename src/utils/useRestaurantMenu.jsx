// Custom hook for fetching restaurant menu data
import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = resId => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu(); // Fetch menu when component mounts
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setResInfo(data?.data); // Update state with fetched data
  };

  return resInfo; // Return restaurant info
};

export default useRestaurantMenu;
