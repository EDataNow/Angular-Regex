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
        
        describe("Quick + Nimble are properly initialized"){
            
            describe("Case 1"){
                
                it("Should expect true to be true"){
                    expect(true).to(beTrue())
                }
                
            }
            
            describe("A Simple Fallacy Test"){
                
                it("Should expect false to be false"){
                     expect(matchStartIndexAndInputAndSelectIndex(input_string:"*", start_index: 1, specific_length: 5, select_index: 1)).to(["123?4"])
                }
                
            }
            
        }
        
    }
}
