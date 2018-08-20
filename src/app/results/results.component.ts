import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  years: number[] = [];
  results: any[] = [];
  private _startingYear: number = 2007;
  private _endingYear: number = new Date().getFullYear();

  constructor() {
    for (var i = this._startingYear; i <= this._endingYear; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.results.push({ year: 2007, firstName: 'Jerome', lastName: 'Jourdon', place: 10, time: '4:56:00' });
    //this.populateResults(2007);
  }

  populateResults(year: number) {
    return this.results.filter((element) => {
      return element.year == year;
    });
  }
}
