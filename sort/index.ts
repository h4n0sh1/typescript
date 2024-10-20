import { Sorter } from './Sorter';
import { NumberCollection } from './src/NumberCollection';
import { CharacterCollection } from './src/CharacterCollection';

const numberCollection = new NumberCollection([10, 3, -5, 0, 30, 5])
const characterCollection = new CharacterCollection("ZaXnj0nRsTbBC")
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(sorter.collection);


