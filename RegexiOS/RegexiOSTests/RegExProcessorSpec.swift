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
            let regex = RegExProcessor(barcodeString: "P12345-A500-H1")
            //let specialRegex = RegExProcessor(barcodeString: "*IVIN1.2.3.4.5.6?")
            
            describe("Return from postion"){
                context("it should should return all characters proceeding from given postion"){
                    it("if match is found and length is not specified"){
                        expect(regex.regexMatches(for: "^.{1}1(.+)", in: regex.plainBarcode)).to(equal(["2345-A500-H1"]))
                    }
                    it("if match is found and length and input_string is not specified"){
                          expect(regex.regexMatches(for: "^.{1}.(.+)", in: regex.plainBarcode)).to(equal(["2345-A500-H1"]))
                    }
//                    it("even with special characters"){
//                        expect(specialRegex.matchOnPositionReturnFromPosition(input_string:"*I", start_index: 1, specific_length: 0, select_index: 3)).to(equal(["VIN1.2.3.4.5.6?"]))
//                    }
                }
//                context("should return the amount of characters specified by length param proceeding from given postion"){
//                    it("if match is found"){
//                        expect(regex.matchOnPositionReturnFromPosition(input_string:"12", start_index: 2, specific_length: 3, select_index: 5)).to(equal(["45-"]))
//                    }
//                    it("if match is found and input_string is not specified"){
//                        expect(regex.matchOnPositionReturnFromPosition(input_string:"", start_index: 2, specific_length: 3, select_index: 5)).to(equal(["45-"]))
//                    }
//
//                }
//                context("should return empty"){
//                    it("if match is not found and length is not specified"){
//                        expect(regex.matchOnPositionReturnFromPosition(input_string:"P", start_index: 2, specific_length: 0, select_index: 5)).to(equal([]))
//                    }
//                    it("if match is not found and length is specified"){
//                        expect(regex.matchOnPositionReturnFromPosition(input_string:"P", start_index: 2, specific_length: 4, select_index: 5)).to(equal([]))
//                    }
//                }
            }
            
            //The function used in the following 'describe' block is supposed to exclude the input_string from the match, if a match is found.
//            describe("Return from match"){
//                context("it should return all characters proceeding from match, exlcuding match"){
//                    it("if match is found and length is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "-", start_index:7, specific_length:0)).to(equal(["A500-H1"]))
//                        //Testing input.characters.count > 1
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "P12", start_index:1, specific_length:0)).to(equal(["345-A500-H1"]))
//                    }
//                    it("if match is found and length and input_string is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "", start_index:7, specific_length:0)).to(equal(["A500-H1"]))
//                    }
//                }
//                context("should return the amount of characters specified by length param proceeding from match, excluding match"){
//                    it("if match is found"){
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "-", start_index:7, specific_length:4)).to(equal(["A500"]))
//                        //Testing input.characters.count > 1
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "P12", start_index:1, specific_length:4)).to(equal(["345-"]))
//                    }
//                    it("if match is found and input_string is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "", start_index:7, specific_length:4)).to(equal(["A500"]))
//                    }
//                }
//                context("should return empty"){
//                    it("if match is not found and length is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "P12", start_index:4, specific_length:0)).to(equal([]))
//                    }
//                    it("if match is not found and length is specified"){
//                        expect(regex.matchOnPositionReturnFromMatch(input_string: "P12", start_index:4, specific_length:4)).to(equal([]))
//                    }
//                }
//            }
//           
//            describe("Return from match(include match)"){
//                context("should return all characters proceeding from match, including match"){
//                    it("if match is found and length is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatchIncludeMatch(input_string: "5", start_index: 6, specific_length: 0)).to(equal(["5-A500-H1"]))
//                    }
//                    it("if match is found and length and input_string is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatchIncludeMatch(input_string: "", start_index: 6, specific_length: 0)).to(equal(["5-A500-H1"]))
//                    }
//                }
//                context("should return the amount of characters specified by length param proceeding from match, including match"){
//                    it("if match is found"){
//                        expect(regex.matchOnPositionReturnFromMatchIncludeMatch(input_string: "1", start_index: 2, specific_length: 5)).to(equal(["12345"]))
//                    }
//                    it("if match is found and input_string is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatchIncludeMatch(input_string: "", start_index: 2, specific_length: 5)).to(equal(["12345"]))
//                    }
//                }
//                context("should return empty"){
//                    it("if match is not found and length is not specified"){
//                        expect(regex.matchOnPositionReturnFromMatchIncludeMatch(input_string: "P", start_index: 2, specific_length: 0)).to(equal([]))
//                    }
//                    it("if match is not found and length is specified"){
//                        expect(regex.matchOnPositionReturnFromMatchIncludeMatch(input_string: "P", start_index: 2, specific_length: 5)).to(equal([]))
//                    }
//                }
//            }
//        }
//        describe("Match on First Match of"){
//            let regex = RegExProcessor(barcodeString: "P12345-A500-H1")
//            describe("#matchOnFirstMatchReturnFromPosition should match on any position"){
//                context("when given a specific length and given index to return") {
//                    it("should return a specfied length string by given position after the match") {
//                        expect(regex.matchOnFirstMatchReturnFromPosition(input_string: "A", specific_length: 2, select_index: 2)).to(equal(["00"]))
//                    }
//                }
//                context("when only given a specifc length") {
//                    it("return the whole string after the given index") {
//                        expect(regex.matchOnFirstMatchReturnFromPosition(input_string: "A", specific_length: 0, select_index: 2)).to(equal(["00-H1"]))
//                    }
//                }
//                        
//                context("when given return length is greater than the remainder length of the match") {
//                    it("should return No Match") {
//                        expect(regex.matchOnFirstMatchReturnFromPosition(input_string: "A", specific_length: 10, select_index: 2)).to(equal([]))
//                    }
//                }
//                context("when given select index is greater than the remainder length of the match") {
//                    it("should return No Match") {
//                        expect(regex.matchOnFirstMatchReturnFromPosition(input_string: "A", specific_length: 2, select_index: 10)).to(equal([]))
//                    }
//                }
//            }
//            describe("Return from match"){
//                describe("#matchOnFirstMatchReturnFromMatch should match on any position"){
//                    context("providing a specific length") {
//                        it("should return the specified length from match") {
//                            expect(regex.matchOnFirstMatchReturnFromMatch(input_string: "A", specific_length: 2)).to(equal(["50"]))
//                        }
//                    }
//                    context("when no specific length is given") {
//                        it("should return everything after the match") {
//                            expect(regex.matchOnFirstMatchReturnFromMatch(input_string: "A", specific_length: 0)).to(equal(["500-H1"]))
//                        }
//                    }
//                    context("when given select index is greater than the remainder length of the match") {
//                        it("should return No Match") {
//                            expect(regex.matchOnFirstMatchReturnFromMatch(input_string: "A", specific_length: 10)).to(equal([]))
//                        }
//                    }
//                }
//            }
//            
//            describe("Return from match including the match") {
//                describe("#matchOnFirstMatchReturnFromMatchIncludeMatch should match on any position"){
//                    
//                    context("providing a specific length") {
//                        it("should return the specified length from match including the match") {
//                            expect(regex.matchOnFirstMatchReturnFromMatchIncludeMatch(input_string: "A", specific_length: 2)).to(equal(["A5"]))
//                        }
//                    }
//                    context("when no specific length is given") {
//                        it("should return everything from match including the match") {
//                            expect(regex.matchOnFirstMatchReturnFromMatchIncludeMatch(input_string: "A", specific_length: 0)).to(equal(["A500-H1"]))
//                        }
//                    }
//                    context("when given return length is greater than the remainder length of the match") {
//                        it("should return no match") {
//                            expect(regex.matchOnFirstMatchReturnFromMatchIncludeMatch(input_string: "A", specific_length: 10)).to(equal([]))
//                        }
//                    }
//                }
//            }
//        }
//  
    }
}
}
