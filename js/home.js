// import { items } from "./items.js";
import { itemsData } from "./data/itemsData.js";

// items('.main-row .items', itemsData);

import { List } from './components/List.js';

new List('.items', '.cart-content', itemsData, '.cart-count');