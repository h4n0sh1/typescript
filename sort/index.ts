import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './StringCollection';

const numberCollection = new NumberCollection([10, 3, -5, 0, 30, 5])
const characterCollection = new CharacterCollection("ZaXnj0nRsTbBC")
const sorter = new Sorter(stringCollection);
sorter.sort();
console.log(sorter.collection);


