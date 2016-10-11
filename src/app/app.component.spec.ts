import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent: AngularRegex', () => {
  var app: AppComponent
  const barcode = 'P12345-A500-H1';

  beforeEach(() => {
    app = new AppComponent();
  })


  describe('matching string on first character or from the whole string', ()=> {

    it('#matchOnAnyPosition should match whole string character', ()=> {
      expect(app.matchOnAnyPosition(barcode, '1')).toEqual('P12345-A500-H1');
    });

    it('#matchOnFirstCharacter should match on first character', ()=> {
      expect(app.matchOnFirstCharacter(barcode, 'P')).toEqual('P12345-A500-H1');
    });
    it('Should return null when no match is found for #matchOnAnyPosition and #matchOnFirstCharacter, ', ()=> {
      expect(app.matchOnAnyPosition(barcode, 'X')).toBe(null);
      expect(app.matchOnFirstCharacter(barcode, '1')).toBe(null);
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

    it('#matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength should return matching string of given length, including match', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, '0', 3)).toEqual('0-H');
    });

    it('should return null is given string is at the end of the barcode', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, 'H1', 2)).toEqual(null);
      expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, 'H1', 2)).toEqual(null);
    });
  })

  describe('Matching string on given index', ()=> {

    it('#matchGivenIndexIncludeMatch should match after given index, including match', ()=> {
      expect(app.matchGivenIndexIncludeMatch(barcode, 3)).toEqual('2345-A500-H1');
    });
    it('#matchGivenIndexNotIncludeMatch should match after given index, not including match', ()=> {
      expect(app.matchGivenIndexNotIncludeMatch(barcode, 2)).toEqual('2345-A500-H1');

    });
    it('#matchGivenIndexAndSpecificLengthIncludeMatch should match after given index and specific length, including match', ()=> {
      expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, 8, 3)).toEqual('A500');
    });
    it('#matchGivenIndexAndSpecificLengthNotIncludeMatch should match after given index and specific length, not including match', ()=> {
      expect(app.matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, 8, 3)).toEqual('500');
    });
    it('should return null when no match is found in any of the examples in the group', ()=> {
      expect(app.matchGivenIndexIncludeMatch(barcode, 99)).toEqual(null);
      expect(app.matchGivenIndexIncludeMatch(barcode, 99)).toEqual(null);
      expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, 100, 3)).toBe(null);
      expect(app.matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, 1000, 3)).toBe(null);
    });
  });
});
