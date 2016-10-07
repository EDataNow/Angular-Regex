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
            
            describe("A Simple Truth Test"){
                
                it("Should expect true to be true"){
                    expect(true).to(beTrue())
                }
                
            }
            
            describe("A Simple Fallacy Test"){
                
                it("Should expect false to be false"){
                     expect(false).to(beFalse())
                }
                
            }
            
        }
        
    }
}
