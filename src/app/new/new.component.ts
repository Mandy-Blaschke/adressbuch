import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
