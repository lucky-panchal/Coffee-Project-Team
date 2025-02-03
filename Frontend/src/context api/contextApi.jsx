import { createContext } from "react";
import hotCoffee from '../components/images/hot-coffee.png';
import icedCoffee from '../components/images/iced-coffee.png';
import specialDrink from '../components/images/special-drink.png';
import teas from '../components/images/teas.png'
import snacks from '../components/images/snacks.png'
import desserts from '../components/images/desserts.png'
import healthyDrinks from '../components/images/healthy-drinks.png'
import streeFood from '../components/images/street-food.png'
import smoothies from '../components/images/smoothies.png'
import instant from '../components/images/instant.png'
import fruitBeers from '../components/images/fruit-beers.png'
import soups from '../components/images/soups.png'


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
    },
    {
      "index": 7,
      "image": healthyDrinks,
      "title": "healthy drinks"
    },
    {
      "index": 8,
      "image": streeFood,
      "title": "street food"
    },
    {
      "index": 9,
      "image": smoothies,
      "title": "smoothies"
    },
    {
      "index": 10,
      "image": instant,
      "title": "instant foods"
    },
    {
      "index": 11,
      "image": fruitBeers,
      "title": "fruit beers"
    },
    {
      "index": 12,
      "image": soups,
      "title": "soups"
    }
  ]
  return (
    <MyContext.Provider value={categoryObj}>
      {children}
    </MyContext.Provider>
  );
}
