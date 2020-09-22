import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})
export class EditingComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
