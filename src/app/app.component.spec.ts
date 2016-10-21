import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent: AngularRegex', () => {
  var app: AppComponent
  const barcode = 'P12345-A500-H1';
  const specialBarcode = '*IVIN1.2.3.4.5.6?'

  beforeEach(() => {
    app = new AppComponent();
  })

  // '' for length params means the user left it blank
  describe('Match on given postion', ()=> {

    describe('Return from postion', ()=> {
      it('should return all characters proceeding from given postion if match is found and length is not specified', ()=> {
        expect(app.matchStartIndexAndInputAndSelectIndex(barcode, '1', 2, '', 5)).toEqual('45-A500-H1');
      });
      it('should return all characters proceeding from given postion if match is found and length/input_string is not specified', ()=> {
        expect(app.matchStartIndexAndInputAndSelectIndex(barcode, '', 2, '', 5)).toEqual('45-A500-H1');
      });
      it('should return the amount of characters specified by length param proceeding from given postion if match is found', ()=> {
        expect(app.matchStartIndexAndInputAndSelectIndex(barcode, '1', 2, 3, 5)).toEqual('45-');
      });
        it('should return the amount of characters specified by length param proceeding from given postion if match is found and input_string is not specified', ()=> {
        expect(app.matchStartIndexAndInputAndSelectIndex(barcode, '', 2, 3, 5)).toEqual('45-');
      });
      it('should return all characters proceeding from given postion, even with special charcters in barcode', ()=> {
        expect(app.matchStartIndexAndInputAndSelectIndex(specialBarcode, '*I', 1, '', 3)).toEqual('VIN1.2.3.4.5.6?');
      });
    });

    describe('Return from match', ()=> {
      it('should return all characters proceeding from match if match is found and length is not specified', ()=> {
        expect(app.matchStartIndexAndInput(barcode, 7, '-', '')).toEqual('A500-H1');
        expect(app.matchStartIndexAndInput(barcode, 7, '', '')).toEqual('A500-H1');
      });
      it('should return all characters proceeding from match if match is found and length is not specified and input_string is not specified', ()=> {
        expect(app.matchStartIndexAndInput(barcode, 7, '', '')).toEqual('A500-H1');
      });
      it('should return the amount of characters specified by length param proceeding from match if match is found', ()=> {
        expect(app.matchStartIndexAndInput(barcode, 7, '-', 4)).toEqual('A500');
      });
      it('should return the amount of characters specified by length param proceeding from match if match is found, and input_string is not specified', ()=> {
        expect(app.matchStartIndexAndInput(barcode, 7, '', 4)).toEqual('A500');
      });
    });

    describe('Return from match(include match)', ()=> {
      it('should return all characters proceeding from match, including match, if match is found and length is not specified', ()=> {
        expect(app.matchStartIndexAndInputAndIncludeMatch(barcode, 6, '5', '')).toEqual('5-A500-H1');
      });
      it('should return all characters proceeding from match, including match, if match is found and length/input_string is not specified', ()=> {
        expect(app.matchStartIndexAndInputAndIncludeMatch(barcode, 6, '', '')).toEqual('5-A500-H1');
      });
      it('should return the amount of characters specified by length param proceeding from match, including match, if match is found', ()=> {
        expect(app.matchStartIndexAndInputAndIncludeMatch(barcode, 2, '1', 5)).toEqual('12345');
      });
      it('should return the amount of characters specified by length param proceeding from match, including match, if match is found and input string is not specified', ()=> {
        expect(app.matchStartIndexAndInputAndIncludeMatch(barcode, 2, '', 5)).toEqual('12345');
      });
    });

   describe('Match on First Match of', ()=> {
    describe('Return from position', ()=> {
      it('#matchOnAnyPositionAndInput should match on any position and return a specfied length string by given position after the match', ()=> {
        expect(app.matchOnAnyPositionAndInput(barcode, 2, 'A', 2)).toEqual('00');
      });

      it('#matchOnAnyPositionAndInput without a specfic length input should return the whole string after the given index', ()=> {
        expect(app.matchOnAnyPositionAndInput(barcode, 2, 'A', 0)).toEqual('00-H1');
      });
    });

    describe('Return from match', ()=> {
      it('#matchOnAnyPositionAndInputProceedingFromMatch should match on any position and return a specfied length string', ()=> {
        expect(app.matchOnAnyPositionAndInputProceedingFromMatch(barcode, 'A', 2)).toEqual('50');
      });
      it('#matchOnAnyPositionAndInputProceedingFromMatch should match on any position and return the complete string if no specific length of return is provided', ()=> {
        expect(app.matchOnAnyPositionAndInputProceedingFromMatch(barcode, 'A', 0)).toEqual('500-H1');
      });
    });

    describe('Return from match including the match', ()=> {
      it('#matchOnAnyPositionIncludeMatchProceed should match on any position and return a specfied length string', ()=> {
        expect(app.matchOnAnyPositionIncludeMatchProceed(barcode, 'A', 2)).toEqual('A5');
      });
      it('#matchOnAnyPositionIncludeMatchProceed should match on any position and return the complete string if no specific length of return is provided', ()=> {
        expect(app.matchOnAnyPositionIncludeMatchProceed(barcode, 'A', 0)).toEqual('A500-H1');
      });
     });

    describe('Input string has no matches in the barcode', ()=> {
      it('should return "No Match"', ()=> {
        //Case 1 and 2
        expect(app.matchStartIndexAndInputAndSelectIndex(barcode, '1', 3, '', 5)).toEqual('No Match');
        expect(app.matchStartIndexAndInputAndSelectIndex(barcode, '1', 3, 4, 5)).toEqual('No Match');
        //Case 3 and 4
        expect(app.matchStartIndexAndInput(barcode, 2, 'P', '')).toEqual('No Match');
        expect(app.matchStartIndexAndInput(barcode, 2, 'P', 4)).toEqual('No Match');
        //Case 5 and 6
        expect(app.matchStartIndexAndInputAndIncludeMatch(barcode, 2, 'P', '')).toEqual('No Match');
        expect(app.matchStartIndexAndInputAndIncludeMatch(barcode, 2, 'P', 5)).toEqual('No Match');
      });

      it('should return No Match if given return position is greater than the remaining length of the match' , ()=> {
        expect(app.matchOnAnyPositionAndInput(barcode, 2, 'A', 10)).toEqual("No Match");
      });
      it('should return No Match if given return length is greater than the remaining length of the match' , ()=> {
        expect(app.matchOnAnyPositionAndInput(barcode, 2, 'A', 10)).toEqual("No Match");
      });
      it('should return No Match if given return length is greater than the remaining length of the match' , ()=> {
        expect(app.matchOnAnyPositionIncludeMatchProceed(barcode,'A', 10)).toEqual("No Match");
      });
    });
  });
});
