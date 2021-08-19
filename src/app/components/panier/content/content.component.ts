import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../../models/Pokemon';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() content: Pokemon[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
