import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { formatDistance, subDays } from 'date-fns'

@Component({
  selector: 'lib-bmi-widget',
  templateUrl: './bmi-widget.component.html',
  styleUrls: ['./bmi-widget.component.css']
})
export class BmiWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const val = _.lastIndexOf([1, 2, 1, 2], 2);
    console.log(val);
    console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));
  }

}
