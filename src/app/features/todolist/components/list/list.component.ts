import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Only works on inputs, changes it so that it will only watch for new list
})
export class ListComponent implements OnInit {

  @Input() items: TodoItem[];
  constructor() { }

  ngOnInit() {
  }

}
