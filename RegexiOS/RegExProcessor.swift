//
//  RegExProcessor.swift
//  RegexiOS
//
//  Created by Spencer on 2016-10-07.
//  Copyright © 2016 EData Now!. All rights reserved.
//

import UIKit

class RegExProcessor: NSObject {
    
    var plainBarcode:String!
    
    override init(){
        plainBarcode = ""
    }
    
    init(barcodeString:String){
        plainBarcode = barcodeString
    }
    
    // Case # 7 & # 8
    func matchOnAnyPositionAndInput(input_string:String, specific_length:Int, select_index:Int) -> String  {
        let check_specific_length = specific_length > 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        
        let regex_input = check_specific_length ? "\(sanitizedInput)(.{\(specific_length)})" : "\(sanitizedInput)(.+)"
        let index = 1
        let collected_matches = regexMatches(pattern: regex_input, in: plainBarcode , index: index)
        
        return collected_matches[0]
    }
    
    // Case # 9 & # 10
    func matchOnAnyPositionAndInputProceedingFromMatch(input_string:String, specific_length:Int) -> String  {
        let check_specific_length = specific_length > 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        
        let regex_input = check_specific_length ? "\(sanitizedInput)(.{\(specific_length)})" : "\(sanitizedInput)(.+)"
        let index = 1
        let collected_matches = regexMatches(pattern: regex_input, in: plainBarcode , index: index)
        
        return collected_matches[0]
    }
    
    // Case # 11 & # 12
    func matchOnAnyPositionIncludeMatchProceed(input_string:String, specific_length:Int) -> String  {
        let check_specific_length = specific_length > 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        
        let regex_input = check_specific_length ? "(\(sanitizedInput).{\(specific_length - input_string.characters.count)})" : "(\(sanitizedInput).+)"
        let index = 1
        let collected_matches = regexMatches(pattern: regex_input, in: plainBarcode , index: index)
        
        return collected_matches[0]
    }
    
    
    private func regexMatches(pattern: String, in text: String, index: Int) -> [String] {
        let regexPattern: NSRegularExpression
        let stringToMatch = text as NSString
        do {
            regexPattern = try NSRegularExpression(pattern: pattern, options: .caseInsensitive)
        } catch {
            return []
        }
        
        let matches = regexPattern.matches(in: text, options: [], range: NSRange(location: 0, length: stringToMatch.length))
        var collectMatches: [String] = []
        for match in matches {
            // range at index 0: full match
            // range at index 1: first capture group
            let substring = (stringToMatch as NSString).substring(with: match.rangeAt(index))
            collectMatches.append(substring)
        }
        return collectMatches
    }
}
