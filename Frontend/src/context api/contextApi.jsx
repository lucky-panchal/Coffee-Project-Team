import { createContext } from "react";
import hotCoffee from '../components/images/hot-coffee.png';
import icedCoffee from '../components/images/iced-coffee.png';
import specialDrink from '../components/images/special-drink.png';
import teas from '../components/images/teas.png'
import snacks from '../components/images/snacks.png'
import desserts from '../components/images/desserts.png'


export const MyContext = createContext();

export function ImgCounter({ children }) {
  const categoryObj = [
    {
      "index": 1,
      "image": hotCoffee,
      "title": "hot coffees"
    },
    {
      "index": 2,
      "image": icedCoffee,
      "title": "iced coffees"
    },
    {
      "index": 3,
      "image": specialDrink,
      "title": "special Drinks"
    },
    {
      "index": 4,
      "image": teas,
      "title": "tea"
    },
    {
      "index": 5,
      "image": snacks,
      "title": "pastries & snacks"
    },
    {
      "index": 6,
      "image": desserts,
      "title": "desserts"
    }
  ]
  return (
    <MyContext.Provider value={categoryObj}>
      {children}
    </MyContext.Provider>
  );
}
