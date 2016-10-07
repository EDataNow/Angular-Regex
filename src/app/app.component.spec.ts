import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent: AngularRegex', () => {
  var app: AppComponent
  const barcode = 'P12345-A500-H1';

  beforeEach(() => {
    app = new AppComponent();
  })

  describe('matching string on first character or from the whole string', () => {
      it('should match whole string character', () => {
        expect(app.matchOnAnyPosition(barcode, '1')).toEqual('12345-A500-H1');
      });
      
      it('should match on first character', () => {
        expect(app.matchOnFirstCharacter(barcode, 'P')).toEqual('P12345-A500-H1');
      });
      it('Should return null when no match is found', () => {
        expect(app.matchOnAnyPosition(barcode, 'X')).toBe(null);
        expect(app.matchOnFirstCharacter(barcode, '1')).toBe(null);
      })
    })

//   it('should match whole string character', () => {
// //     let barcode = 'P12345-A500-H1';
//     expect(app.matchOnAnyPosition(barcode, '1')).toEqual('12345-A500-H1');
//     expect(app.matchOnAnyPosition(barcode, 'X')).toBe(null);
//   });

//   it('should match on first character', () => {

//     expect(app.matchOnFirstCharacter(barcode, 'P')).toEqual('P12345-A500-H1');
//   });

//   it('should match on first character, return string proceeding match; including match', () => {

//     expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, 'A5')).toEqual('A500-H1');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, '1')).toEqual('12345-A500-H1');
//   });

//   it('should match on first character, return string proceeding match; not including match', () => {

//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, 'A5')).toEqual('00-H1');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, 'H')).toEqual('1');
//   });

//    it('should match any position from given string and specific, including match', () => {

//     expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, 'A5', 2)).toEqual('A500');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode, '1', 3)).toEqual('1234');
//   });

//   it('should match on first character, return string proceeding match; not including match', () => {

//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, '0', 3)).toEqual('0-H');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, '1', 6)).toEqual('2345-A');
//     expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, 'X5', 2)).toBe(null);
//   });

//  it('should match after given index, including match', () => {

//     expect(app.matchGivenIndexIncludeMatch(barcode, 3)).toEqual('2345-A500-H1');
//     expect(app.matchGivenIndexIncludeMatch(barcode, 5)).toEqual('45-A500-H1');
//     expect(app.matchGivenIndexIncludeMatch(barcode, 9)).toEqual('500-H1');
//     expect(app.matchGivenIndexIncludeMatch(barcode, 1)).toEqual('P12345-A500-H1');
//     expect(app.matchGivenIndexIncludeMatch(barcode, 99)).toEqual(null);
//   });

// it('should match after given index, not including match', () => {

//     expect(app.matchGivenIndexNotIncludeMatch(barcode, 2)).toEqual('2345-A500-H1');
//     expect(app.matchGivenIndexNotIncludeMatch(barcode, 4)).toEqual('45-A500-H1');
//     expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, 8, 5)).toEqual('A500-H');
//     expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, 1, 5)).toEqual('P12345');    expect(app.matchGivenIndexIncludeMatch(barcode, 99)).toEqual(null);
//   });

//  it('should match after given index and specific length, including match', () => {

//     expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, 8, 3)).toEqual('A500');

//     expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, 100, 3)).toBe(null);
//   });

//  it('should match after given index and specific length, not including match', () => {

//     expect(app.matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, 8, 3)).toEqual('500');
//     expect(app.matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, 1000, 3)).toBe(null);
//   });
});

