import { match } from "assert";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTarger/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]):string;
}; 

export interface OutputTarget {
  print(report: string): void;
};

export class Summary {
  // can be call with class name
  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary (
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }

  constructor(
    public analyzer: Analyzer, 
    public outputTarget: OutputTarget){}


    buildAndPrintReport(matches: MatchData[]): void{
      const outPut = this.analyzer.run(matches);
      this.outputTarget.print(outPut)
    }
}
