import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss']
})
export class PersonViewComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
