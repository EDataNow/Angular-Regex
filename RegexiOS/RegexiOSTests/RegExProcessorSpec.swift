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
        
        let barcode = "P12345-A500-H1"
        let regEx = RegExProcessor(barcodeString: barcode )
        
            describe("Match on First Match of"){
                describe("#matchOnAnyPositionAndInput should match on any position"){
                    
                    context("when given a specific length and given index to return") {
                        it("should return a specfied length string by given position after the match") {
                            expect(regEx.matchOnAnyPositionAndInput(input_string: "A", specific_length: 2, select_index: 2)).to(equal(["00"]))
                        
                    }
                    
                    context("when only given a specifc length") {
                        it("return the whole string after the given index") {
                            expect(regEx.matchOnAnyPositionAndInput(input_string: "A", specific_length: 0, select_index: 2)).to(equal(["00-H1"]))
                        }
                    }
                    
                    context("when given return length is greater than the remainder length of the match") {
                        it("should return No Match") {
                            expect(regEx.matchOnAnyPositionAndInput(input_string: "A", specific_length: 10, select_index: 2)).to(equal([]))
                        }
                    }
                    context("when given select index is greater than the remainder length of the match") {
                        it("should return No Match") {
                            expect(regEx.matchOnAnyPositionAndInput(input_string: "A", specific_length: 2, select_index: 10)).to(equal([]))
                        }
                    }
                }
                
                describe("Return from match"){
                    describe("#matchOnAnyPositionAndInputProceedingFromMatch should match on any position"){
                        
                        context("providing a specific length") {
                            it("should return the specified length from match") {
                                expect(regEx.matchOnAnyPositionAndInputProceedingFromMatch(input_string: "A", specific_length: 2)).to(equal(["50"]))
                            }
                        }
                        context("when no specific length is given") {
                            it("should return everything after the match") {
                                expect(regEx.matchOnAnyPositionAndInputProceedingFromMatch(input_string: "A", specific_length: 0)).to(equal(["500-H1"]))
                            }
                        }
                        context("when given select index is greater than the remainder length of the match") {
                            it("should return No Match") {
                                expect(regEx.matchOnAnyPositionAndInputProceedingFromMatch(input_string: "A", specific_length: 10)).to(equal([]))
                            }
                        }
                    }
                }
                
                describe("Return from match including the match") {
                    describe("#matchOnAnyPositionIncludeMatchProceed should match on any position"){
                        
                        context("providing a specific length") {
                            it("should return the specified length from match including the match") {
                                expect(regEx.matchOnAnyPositionIncludeMatchProceed(input_string: "A", specific_length: 2)).to(equal(["A5"]))
                            }
                        }
                        context("when no specific length is given") {
                            it("should return everything from match including the match") {
                                expect(regEx.matchOnAnyPositionIncludeMatchProceed(input_string: "A", specific_length: 0)).to(equal(["A500-H1"]))
                            }
                        }
                        context("when given return length is greater than the remainder length of the match") {
                            it("should return no match") {
                                expect(regEx.matchOnAnyPositionIncludeMatchProceed(input_string: "A", specific_length: 10)).to(equal([]))
                            }
                        }
                    }
                }
            }
        }
    }
}
