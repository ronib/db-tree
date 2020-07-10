import { Component, OnInit, Input } from '@angular/core';
import { Entity } from 'src/app/model/interfaces';

@Component({
  selector: 'app-node-label',
  templateUrl: './node-label.component.html',
  styleUrls: ['./node-label.component.scss']
})
export class NodeLabelComponent implements OnInit {
  @Input() name: string;
  @Input() type: Entity;
  
  constructor() { }

  ngOnInit(): void {
  }

}
