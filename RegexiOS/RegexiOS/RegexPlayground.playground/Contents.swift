//: Playground - noun: a place where people can play

import UIKit

let barcode = "*123?45#A5?0-H1"

func matchStartIndexAndInputAndSelectIndex(input_string:String, start_index:Int, specific_length:Int, select_index:Int) -> [String]  {
    let check_specific_length = specific_length > 0
    let sanitizedInput = input_string == " " ? "." : NSRegularExpression.escapedPattern(for: input_string)
    let regex_input = check_specific_length ? "^.{\(start_index - 1)}\(sanitizedInput).{\(select_index - (input_string.characters.count))}(.{\(specific_length)})" : "^.{\(start_index - 1)}\(input_string).{\(select_index - (input_string.characters.count) - start_index)}(.+)"
    return regexMatches(pattern: regex_input, in: barcode , index: 1)
}

func regexMatches(pattern: String, in text: String, index: Int) -> [String] {
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

let string = "*123?45#A5?0-H1"
let input = "*"
let escapedInput = NSRegularExpression.escapedPattern(for: input)
let pattern = "^.{0}\(escapedInput)(.+)"
let matched = regexMatches(pattern: pattern , in: string, index: 1)

matchStartIndexAndInputAndSelectIndex(input_string:"*", start_index: 1, specific_length: 5, select_index: 1)






