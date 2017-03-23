import {Component} from '@angular/core';
import {RandomNumberService} from '../standalone-services/random-number.service';
import {CompositeRandomNumberService} from "../composite-services/composite-random-number.service";


/*
  Copied from:
    https://angular.io/docs/ts/latest/guide/testing.html
 */
@Component({
  selector: 'app-button-with-service-2-comp',
  template: `
    <button (click)="onClick()">Click me!</button>
    <span>[{{ theNumber === null ? "No number" : theNumber }}]</span>`,
  providers: [
    CompositeRandomNumberService,
    RandomNumberService
  ]
})
export class ButtonWithService2Component {

  theNumber: number = null;

  constructor(private compositeRandomService: CompositeRandomNumberService) {
  }

  public onClick(): void {
    try {
      this.theNumber = this.compositeRandomService.getRandomNumberFrom0To1000();
    } catch (e) {
      console.log("Error" , e);
      this.theNumber = null;
    }
  }

}
