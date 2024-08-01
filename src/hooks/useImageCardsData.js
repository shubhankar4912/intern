import { useState, useEffect } from 'react';

const useImageCardsData = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { imageUrl: "./card/Rectangle 992.png", title: 'Alley Palace', rating: 4.1,detail:"Alley Palace is a hotel in Angisa, Batumi, Georgia. It is located 1,650 feet from the center of Angisa, and some rooms have balconies. Prices may vary depending on the dates and the hotel's policies. Once you book, you can request specific things and the hotel will provide details so you can contact them directly",price:"$199"},
        { imageUrl: './card/Rectangle 994.png', title:'Coeurdes Alpes', rating: 4.5,detail:"Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and ....",price:"$200" },
        { imageUrl: './card/Rectangle 993.png', title: 'Beach Resort', rating: 4.7,detail:"Beach resorts are vacation destinations located near a beach, lake, ocean, or river. They typically offer a variety of accommodations, such as hotels, villas, bungalows, or condos, with balconies or patios that overlook the water. Beach resorts also often have a wide range of amenities to keep guests entertained and comfortable.",price:"$300" },
        { imageUrl: './card/rectangle.jpg', title: 'Taj Mahal', rating: 4.9,detail:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.',price:"$150" },
     
      ];
      setCardsData(data);
    };

    fetchData();
  }, []);

  return cardsData;
};

export default useImageCardsData;
