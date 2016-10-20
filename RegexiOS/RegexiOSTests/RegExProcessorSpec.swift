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
            describe("Return from postion"){
                context("it should should return all characters"){
                    it("proceeding from given postion if match is found and length is not specified"){
                        expect(regex.matchStartIndexAndInputAndSelectIndex(input_string:"1", start_index: 2, specific_length: 0, select_index: 5)).to(equal(["45-A500-H1"]))
                    }
                    it("proceeding from given postion if match is found and length/input_string is not specified"){
                        expect(regex.matchStartIndexAndInputAndSelectIndex(input_string:"", start_index: 2, specific_length: 0, select_index: 5)).to(equal(["45-A500-H1"]))
                    }
                }
                context("should return the amount of characters specified by length param"){
                    it("proceeding from given postion if match is found"){
                        expect(regex.matchStartIndexAndInputAndSelectIndex(input_string:"12", start_index: 2, specific_length: 3, select_index: 5)).to(equal(["45-"]))
                    }
                    it("proceeding from given postion if match is found and input_string is not specified"){
                        expect(regex.matchStartIndexAndInputAndSelectIndex(input_string:"", start_index: 2, specific_length: 3, select_index: 5)).to(equal(["45-"]))
                    }

                }
            }
        }
    }
}
