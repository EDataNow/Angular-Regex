/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: AngularRegex', () => {
  var app: AppComponent

  beforeEach(() => {
    app = new AppComponent();
  })

  it('should match on first character', () => {
    let barcode1 = 'P12345-A500-H1';
    let barcode2 = '123TYU890';

    expect(app.matchOnFirstCharacter(barcode1, 'P')).toEqual('P12345-A500-H1');
    expect(app.matchOnFirstCharacter(barcode2, 'P')).not.toEqual('P12345-A500-H1');
  });

  it('should match on whole string', () => {
    let barcode1 = 'P12345-A500-H1';

    expect(app.matchOnAnyPosition(barcode1, 'A5')).toEqual('P12345-A500-H1');
  });

    it('should match on first character, return string proceeding match; including match', () => {
    let barcode1 = 'P12345-A500-H1';

    expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode1, 'A5')).toEqual('A500-H1');
    expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode1, 'a5')).not.toEqual('A500-H1');
  });

  it('should match on first character, return string proceeding match; not including match', () => {
    let barcode1 = 'P12345-A500-H1';

    expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode1, 'A5')).toEqual('00-H1');
    expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode1, 'X5')).not.toEqual('00-H1');
  });

   it('should match any position from given string and specific, including match', () => {
    let barcode1 = 'P12345-A500-H1';
    let result = app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode1, 'A5', 2)

    expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode1, 'A5', 2)).toEqual('A500');
    expect(app.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength(barcode1, 'X5', 2)).not.toEqual('A500');
  });

  it('should match on first character, return string proceeding match; not including match', () => {
    let barcode1 = 'P12345-A500-H1';
    let result = app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode1, 'A5', 2)

    expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode1, '0', 3)).toEqual('0-H');
    expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode1, '1', 6)).toEqual('2345-A');
    expect(app.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode1, 'X5', 2)).not.toEqual('00');
  });

 it('should match after given index, including match', () => {
    let barcode1 = 'P12345-A500-H1';

    expect(app.matchGivenIndexIncludeMatch(barcode1, 3)).toEqual('2345-A500-H1');
    expect(app.matchGivenIndexIncludeMatch(barcode1, 5)).toEqual('45-A500-H1');
    expect(app.matchGivenIndexIncludeMatch(barcode1, 9)).toEqual('500-H1');
    expect(app.matchGivenIndexIncludeMatch(barcode1, 1)).toEqual('P12345-A500-H1');
    expect(app.matchGivenIndexIncludeMatch(barcode1, 4)).not.toEqual('2345-A500-H1');
  });

it('should match after given index, not including match', () => {
    let barcode1 = 'P12345-A500-H1';
    let result = app.matchGivenIndexNotIncludeMatch(barcode1, 2)

    expect(app.matchGivenIndexNotIncludeMatch(barcode1, 2)).toEqual('2345-A500-H1');
    expect(app.matchGivenIndexNotIncludeMatch(barcode1, 4)).toEqual('45-A500-H1');
    expect(app.matchGivenIndexNotIncludeMatch(barcode1, 3)).not.toEqual('2345-A500-H1');
  });

it('should match after given index and specific length, including match', () => {
    let barcode1 = 'P12345-A500-H1';

    expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode1, 8, 3)).toEqual('A500');
    expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode1, 8, 5)).toEqual('A500-H'); 
    expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode1, 2, 1000)).toEqual('12345-A500-H1');  
    expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode1, 100, 1000)).toEqual('');  
    expect(app.matchGivenIndexAndSpecificLengthIncludeMatch(barcode1, 5, 3)).not.toEqual('A500');
  });

it('should match after given index and specific length, not including match', () => {
    let barcode1 = 'P12345-A500-H1';

    expect(app.matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode1, 8, 3)).toEqual('500');
    expect(app.matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode1, 5, 3)).not.toEqual('500');
  });


  
});
