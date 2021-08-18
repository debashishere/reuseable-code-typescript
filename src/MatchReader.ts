import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult';

// a cystom type
type MatchData = [ Date, string, string, number, number, MatchResult, string];


interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches : MatchData[] = []

  // reader satisfying DataReader interface
  constructor(public reader: DataReader){}

  load(): void{
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]):MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // type assersion
          row[5] as MatchResult ,// 'H', 'A', 'D'
          row[6]
        ]
      })
  }
}