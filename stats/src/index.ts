import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader("./data/football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
