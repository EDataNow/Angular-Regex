import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent: AngularRegex', () => {
  var app: AppComponent
  const barcode = 'P12345-A500-H1';
  const barcode1 = 'BA3456'

  beforeEach(() => {
    app = new AppComponent();
  })


  describe('matching string from the whole barcode', ()=> {

    it('#matchOnAnyPosition should match whole string character', ()=> {
      expect(app.matchOnAnyPosition(barcode, '1')).toEqual('P12345-A500-H1');
    });

    it('Should return null when no match is found for #matchOnAnyPosition and #matchOnFirstCharacter, ', ()=> {
      expect(app.matchOnAnyPosition(barcode, 'X')).toBe(null);
    });
  })

  describe('Matching after given string', ()=> {

    it('#matchOnAnyPositionReturnStringProceedingMatchIncludingMatch should match after given string, including match', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, 'A5')).toEqual('A500-H1');
    });

    it('#matchOnAnyPositionReturnStringProceedingMatchIncludingMatch should only return matching string, if said string is at the end of barcode', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, 'H1')).toEqual('H1');
    });

    it('#matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch should match after given string, not including match', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, 'A')).toEqual('500-H1');
    });

    it('#matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch should return empty if matching string is at the end of the barcode', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, 'H1')).toEqual('');
    });

    it('#matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength should return matching string of given length, including match', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, 'A5', 2)).toEqual('A500');
    });

    it('#matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength should return matching string of given length, excluding match', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, '0', 3)).toEqual('0-H');
    });

    it('should return null if given string is at the end of the barcode', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, 'H1', 2)).toEqual(null);
      expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, 'H1', 2)).toEqual(null);
    });
  })

  describe('Matching string on given index and input', ()=> {
    it('#matchGivenIndexAndInputAndSpecificLengthIncludeMatch should match at given index and input string and length, including match', ()=> {
      expect(app.matchGivenIndexAndInputAndSpecificLengthIncludeMatch(barcode1, 'A', 2, 3)).toEqual('A345');
    });
    it('#matchGivenIndexandInputAndSpecificLengthNotIncludeMatch should match  at given index and input string and length, excluding match', ()=> {
      expect(app.matchGivenIndexandInputAndSpecificLengthNotIncludeMatch(barcode1, 'A', 2, 3)).toEqual('345');
    });

    it('#matchGivenIndexAndSpecificLengthIncludeMatch should match after given index and specific length, including match', ()=> {
      expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, 8, 3)).toEqual('A500');
    });
    it('#matchGivenIndexAndSpecificLengthNotIncludeMatch should match after given index and specific length, excluding match', ()=> {
      expect(app.matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, 8, 3)).toEqual('500');
    });

    it('#matchGivenIndexAndInputIncludingMatchReturnProceedingString should match at given index and input string, including match', ()=> {
      expect(app. matchGivenIndexAndInputIncludingMatchReturnProceedingString(barcode, 4, '3')).toEqual('345-A500-H1');
     });
    it('#matchGivenIndexAndInputIncludingMatchReturnProceedingString should match at given index and input string, including match', ()=> {
      expect(app. matchGivenIndexAndInputNotIncludingMatchReturnProceedingString(barcode, 4, '3')).toEqual('45-A500-H1');
    });
    it('should return null if input is not at given index', ()=> {
      expect(app.matchGivenIndexAndInputAndSpecificLengthIncludeMatch(barcode1, 'A', 3, 3)).toEqual(null);
      expect(app.matchGivenIndexandInputAndSpecificLengthNotIncludeMatch(barcode1, 'A', 4, 3)).toEqual(null);
    });

    it('should return null if given length is greater than the remaining string', ()=> {
      expect(app.matchGivenIndexAndInputAndSpecificLengthIncludeMatch(barcode1, 'A', 3, 20)).toEqual(null);
    });

  });
});


