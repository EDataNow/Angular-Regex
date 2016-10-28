//
//  RegExProcessor.swift
//  RegexiOS
//
//  Created by Spencer on 2016-10-07.
//  Copyright © 2016 EData Now!. All rights reserved.
//

import Foundation

class RegExProcessor: NSObject {
    
    var plainBarcode:String!
    
    override init(){
        plainBarcode = "*123?45#A5?0-H1"
    }
    
    init(barcodeString:String){
        plainBarcode = barcodeString
    }
    
    func regexMatches(for regex: String, in barcode: String) -> String {
        let regexPattern: NSRegularExpression
        let barcodeToMatch = barcode as NSString
        do {
            regexPattern = try NSRegularExpression(pattern: regex, options: .caseInsensitive)
        } catch {
            return ""
        }
        
        let matches = regexPattern.matches(in: barcode, options: [], range: NSRange(location: 0, length: barcodeToMatch.length))
        var matchString: String = ""
        for match in matches {
            // range at index 0: full match
            // range at index 1: first capture group
            let substring = (barcodeToMatch as NSString).substring(with: match.rangeAt(1))
            matchString = substring
        }
        return matchString
    }
    
    func regexMatcher() {
        let regex = CommandLine.arguments[1]
        let barcode = CommandLine.arguments[2]
        let result = regexMatches(for: regex, in: barcode)
        print("\(result)")
    }
}
