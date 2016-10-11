import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent: AngularRegex', () => {
  var app: AppComponent
  const barcode = 'P12345-A500-H1';

  beforeEach(() => {
    app = new AppComponent();
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


    it('should return null if given string is at the end of the barcode', ()=> {
      expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, 'H1', 2)).toEqual(null);
      expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, 'H1', 2)).toEqual(null);
    });


  })



//    it('should match any position from given string and specific, including match', () => {
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, 'A5', 2)).toEqual('A500');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, '1', 3)).toEqual('1234');
//   });

//   it('should match on first character, return string proceeding match; not including match', () => {
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, '0', 3)).toEqual('0-H');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, '1', 6)).toEqual('2345-A');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, 'X5', 2)).toBe(null);
//   });
});
