import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent: AngularRegex', () => {
  var app: AppComponent
  const barcode = 'P12345-A500-H1';
  const barcode1 = 'BA3456'

  beforeEach(() => {
    app = new AppComponent();
  })

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

      describe('Returns No Match when', ()=> {
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