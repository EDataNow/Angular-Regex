//
//  RegExProcessorSpec.swift
//  RegexiOS
//
//  Created by Spencer on 2016-10-07.
//  Copyright © 2016 EData Now!. All rights reserved.
//

import XCTest
import Quick
import Nimble
@testable import RegexiOS

class RegExProcessorSpec: QuickSpec {
    
    override func spec(){
        describe("Match on Positon "){
            let regex = RegExProcessor(barcodeString: "P12345-A500-H?1")
            describe("Return from postion"){
                context("it should should return all characters proceeding from given postion"){
                    it("if match is found and length is not specified"){
                        expect(regex.regexMatches(for: "^.{1}12.{0}(.+)", in: regex.plainBarcode)).to(equal("345-A500-H?1"))
                    }
                    it("if match is found and length and input_string is not specified"){
                          expect(regex.regexMatches(for: "^.{1}.{2}(.+)", in: regex.plainBarcode)).to(equal("345-A500-H?1"))
                    }
                    it("even with special characters"){
                       expect(regex.regexMatches(for: "^.{13}\\?(.+)", in: regex.plainBarcode)).to(equal("1"))
                    }
                }
                context("should return the amount of characters specified by length param proceeding from given postion"){
                    it("if match is found"){
                         expect(regex.regexMatches(for: "^.{3}3{1}(.{3})", in: regex.plainBarcode)).to(equal("45-"))
                    }
                    it("if match is found and input_string is not specified"){
                         expect(regex.regexMatches(for: "^.{3}.{1}(.{3})", in: regex.plainBarcode)).to(equal("45-"))
                    }

                }
                context("should return empty"){
                    it("if match is not found and length is not specified"){
                         expect(regex.regexMatches(for: "^.{1}4.{4}(.+)", in: regex.plainBarcode)).to(equal(""))
                    }
                    it("if match is not found and length is specified"){
                        expect(regex.regexMatches(for: "^.{1}4.{4}(.{2})", in: regex.plainBarcode)).to(equal(""))
                    }
                }
            }
            
//The function used in the following 'describe' block is supposed to exclude the input_string from the match, if a match is found.
            describe("Return from match"){
                context("it should return all characters proceeding from match, exlcuding match"){
                    it("if match is found and length is not specified"){
                         expect(regex.regexMatches(for: "^.{3}3(.+)", in: regex.plainBarcode)).to(equal("45-A500-H?1"))
                                           }
                    it("if match is found and length and input_string is not specified"){
                         expect(regex.regexMatches(for: "^.{3}.(.+)", in: regex.plainBarcode)).to(equal("45-A500-H?1"))
                    }
                }
                context("should return the amount of characters specified by length param proceeding from match, excluding match"){
                    it("if match is found"){
                        expect(regex.regexMatches(for: "^.{3}3(.{4})", in: regex.plainBarcode)).to(equal("45-A"))
                    }
                    it("if match is found and input_string is not specified"){
                        expect(regex.regexMatches(for: "^.{3}.(.{4})", in: regex.plainBarcode)).to(equal("45-A"))
                    }
                }
                context("should return empty"){
                    it("if match is not found and length is not specified"){
                        expect(regex.regexMatches(for: "^.{3}5(.+)", in: regex.plainBarcode)).to(equal(""))
                    }
                    it("if match is not found and length is specified"){
                        expect(regex.regexMatches(for: "^.{3}5.(.{4})", in: regex.plainBarcode)).to(equal(""))
                    }
                }
            }
           
            describe("Return from match(include match)"){
                context("should return all characters proceeding from match, including match"){
                    it("if match is found and length is not specified"){
                        expect(regex.regexMatches(for: "^.{1}(1.+)", in: regex.plainBarcode)).to(equal("12345-A500-H?1"))
                    }
                    it("if match is found and length and input_string is not specified"){
                       expect(regex.regexMatches(for: "^.{1}(.+)", in: regex.plainBarcode)).to(equal("12345-A500-H?1"))
                    }
                }
                context("should return the amount of characters specified by length param proceeding from match, including match"){
                    it("if match is found"){
                        expect(regex.regexMatches(for: "^.{1}(1.{4})", in: regex.plainBarcode)).to(equal("12345"))
                    }
                    it("if match is found and input_string is not specified"){
                        expect(regex.regexMatches(for: "^.{1}(.{5})", in: regex.plainBarcode)).to(equal("12345"))
                    }
                }
                context("should return empty"){
                    it("if match is not found and length is not specified"){
                        expect(regex.regexMatches(for: "^.{1}(6.+)", in: regex.plainBarcode)).to(equal(""))
                    }
                    it("if match is not found and length is specified"){
                        expect(regex.regexMatches(for: "^.{1}(6.{5})", in: regex.plainBarcode)).to(equal(""))
                    }
                }
            }
        }
        describe("Match on First Match of"){
            let regex = RegExProcessor(barcodeString: "P12345-A500-H?1")
            describe("#matchOnFirstMatchReturnFromPosition should match on any position"){
                context("when given a specific length and given index to return") {
                    it("should return a specfied length string by given position after the match") {
                        expect(regex.regexMatches(for: "1.{3}(.{5})", in: regex.plainBarcode)).to(equal("5-A50"))
                    }
                }
                context("when specific length is not specified") {
                    it("return the whole string after the given index") {
                        expect(regex.regexMatches(for: "1.{3}(.+)", in: regex.plainBarcode)).to(equal("5-A500-H?1"))
                    }
                }
//
                context("when given return length is greater than the remainder length of the match") {
                    it("should return No Match") {
                         expect(regex.regexMatches(for: "1.{3}(.{20})", in: regex.plainBarcode)).to(equal(""))
                    }
                }
                context("when given select index is greater than the remainder length of the match") {
                    it("should return No Match") {
                         expect(regex.regexMatches(for: "1.{15}(.+)", in: regex.plainBarcode)).to(equal(""))
                    }
                }
            }
            describe("Return from match"){
                describe("#matchOnFirstMatchReturnFromMatch should match on any position"){
                    context("providing a specific length") {
                        it("should return the specified length from match") {
                             expect(regex.regexMatches(for: "1(.{3})", in: regex.plainBarcode)).to(equal("234"))
                        }
                    }
                    context("when no specific length is given") {
                        it("should return everything after the match") {
                             expect(regex.regexMatches(for: "1(.+)", in: regex.plainBarcode)).to(equal("2345-A500-H?1"))
                        }
                    }
                    context("when given return length is greater than the remainder length of the match") {
                        it("should return No Match") {
                             expect(regex.regexMatches(for: "1(.{20})", in: regex.plainBarcode)).to(equal(""))
                        }
                    }
                }
            }
            
            describe("Return from match including the match") {
                describe("#matchOnFirstMatchReturnFromMatchIncludeMatch should match on any position"){
                    
                    context("providing a specific length") {
                        it("should return the specified length from match including the match") {
                             expect(regex.regexMatches(for: "(1.{4})", in: regex.plainBarcode)).to(equal("12345"))
                        }
                    }
                    context("when no specific length is given") {
                        it("should return everything from match including the match") {
                            expect(regex.regexMatches(for: "(1.+)", in: regex.plainBarcode)).to(equal("12345-A500-H?1"))
                        }
                    }
                    context("when given return length is greater than the remainder length of the match") {
                        it("should return no match") {
                             expect(regex.regexMatches(for: "(1.{20})", in: regex.plainBarcode)).to(equal(""))
                        }
                    }
                }
            }
        }
   }
}
