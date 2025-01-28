import { Sorter } from './src/Sorter';
import { NumberCollection } from './src/NumberCollection';
import { CharacterCollection } from './src/CharacterCollection';
import { LinkedList } from './src/LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0, 30, 5])
const characterCollection = new CharacterCollection("ZaXnj0nRsTbBC")
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);

linkedList.sort()
linkedList.print()



