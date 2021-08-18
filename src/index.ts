import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTarger/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTarger/HtmlReport";

// Create ab Object satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying 
// the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches)