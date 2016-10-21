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
        plainBarcode = "*123?45#A5?0-H1"
    }
    
    init(barcodeString:String){
        plainBarcode = barcodeString
    }

    func matchOnPositionReturnFromPosition(input_string:String, start_index:Int, specific_length:Int, select_index:Int) -> [String]  {
        let check_specific_length = specific_length != 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        let regex_input = check_specific_length ? "^.{\(start_index - 1)}\(sanitizedInput).{\(select_index - (input_string.characters.count) - start_index)}(.{\(specific_length)})" : "^.{\(start_index - 1)}\(sanitizedInput).{\(select_index - (input_string.characters.count) - start_index)}(.+)"
        let index = 1
        return regexMatches(pattern: regex_input, in: plainBarcode , index: index)
    }

    func matchOnPositionReturnFromMatch(input_string:String, start_index:Int, specific_length:Int) -> [String]  {
        let check_specific_length = specific_length != 0
        let sanitizedInput = input_string == "" ? "." : NSRegularExpression.escapedPattern(for: input_string)
        let regex_input = check_specific_length ? "^.{\(start_index - 1)}\(sanitizedInput)(.{\(specific_length)})" : "^.{\(start_index - 1)}\(sanitizedInput)(.+)"
        let index = 1
        return regexMatches(pattern: regex_input, in: plainBarcode , index: index)
    }

    func matchOnPositionReturnFromMatchIncludeMatch(input_string:String, start_index:Int, specific_length:Int) -> [String]  {
        let check_specific_length = specific_length != 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        let regex_input = check_specific_length ? "^.{\(start_index - 1)}(\(sanitizedInput).{\(specific_length - input_string.characters.count)})" : "^.{\(start_index - 1)}(\(sanitizedInput).+)"
        let index = 1
        return regexMatches(pattern: regex_input, in: plainBarcode , index: index)
    }

    func matchOnFirstMatchReturnFromPosition(input_string:String, specific_length:Int, select_index:Int) -> [String]  {
        let check_specific_length = specific_length > 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        
        let regex_input = check_specific_length ? "\(sanitizedInput).{\(select_index - 1 )}(.{\(specific_length)})" : "\(sanitizedInput).{\(select_index - 1 )}(.+)"
        let index = 1
        let collected_matches = regexMatches(pattern: regex_input, in: plainBarcode , index: index)
        
        return collected_matches
    }

    func matchOnFirstMatchReturnFromMatch(input_string:String, specific_length:Int) -> [String]  {
        let check_specific_length = specific_length > 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        
        let regex_input = check_specific_length ? "\(sanitizedInput)(.{\(specific_length)})" : "\(sanitizedInput)(.+)"
        let index = 1
        let collected_matches = regexMatches(pattern: regex_input, in: plainBarcode , index: index)
        
        return collected_matches
    }

    func matchOnFirstMatchReturnFromMatchIncludeMatch(input_string:String, specific_length:Int) -> [String]  {
        let check_specific_length = specific_length > 0
        let sanitizedInput = NSRegularExpression.escapedPattern(for: input_string)
        
        let regex_input = check_specific_length ? "(\(sanitizedInput).{\(specific_length - input_string.characters.count)})" : "(\(sanitizedInput).+)"
        let index = 1
        let collected_matches = regexMatches(pattern: regex_input, in: plainBarcode , index: index)
        
        return collected_matches
    }
    
    
    
    private func regexMatches(pattern: String, in text: String, index: Int) -> [String] {
        let regexPattern: NSRegularExpression
        let stringToMatch = text as NSString
        do {
            regexPattern = try NSRegularExpression(pattern: pattern, options:         .caseInsensitive)
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
