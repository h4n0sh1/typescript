"use strict";
<<<<<<< HEAD
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
}
=======
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./src/NumberCollection");
const CharacterCollection_1 = require("./src/CharacterCollection");
const LinkedList_1 = require("./src/LinkedList");
const numberCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0, 30, 5]);
const characterCollection = new CharacterCollection_1.CharacterCollection("ZaXnj0nRsTbBC");
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
linkedList.sort();
linkedList.print();
>>>>>>> fc1a638185ee8f5a0792c9d3f690678a3909baec
