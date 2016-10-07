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
    
    func applyRegExMutations(plainString:String!,index:Int){
        //TODO: Complete this method as needed to perform RegEx
        
    }
}
