import { Given, When, Then } from "@cucumber/cucumber";
import { generate } from "../../lib/data-generation-lib";
import { expect } from "chai";

Given('Mike creates the pattern {string}', function (pattern: string) {
  this.pattern = pattern;
});

When('he uses the Symbols {string}', function (symbols) {
  this.result = generate(this.pattern,symbols.split(''));
});

Then('all {string} letters are changed randomly to one of {string}', function (changeSymbol:string, checkSymbolStr:string) {
  const result = this.result as string;
  const checkSymbols = checkSymbolStr.split('');
  (this.pattern as string).split('').forEach((x,i)=>{if (x===changeSymbol) {
    const value = result.charAt(i);
    expect(checkSymbols).to.include(value);
  }})
});