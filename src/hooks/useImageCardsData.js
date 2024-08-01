import { useState, useEffect } from 'react';

const useImageCardsData = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API or other sources
    const fetchData = async () => {
      const data = [
        { imageUrl: './card/Rectangle 992.png', title: 'Alley Palace', rating: 4.1 },
        { imageUrl: './card/Rectangle 994.png', title:'Coeurdes Alpes', rating: 4.5 },
        { imageUrl: './card/Rectangle 993.png', title: 'Beach Resort', rating: 4.7 },
        // Add more card data objects as needed
      ];
      setCardsData(data);
    };

    fetchData();
  }, []);

  return cardsData;
};

export default useImageCardsData;
