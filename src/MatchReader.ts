import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData'
import { CsvFileReader } from './CsvFileReader'
import { DataReader } from './DataReader';

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(
      new CsvFileReader(filename)
    )
  }

  matches : MatchData[] = []

  // reader satisfying DataReader interface
  constructor(public reader: DataReader){}

  load(): void{
    // deligation
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