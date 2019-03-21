import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LibraryItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() items: LibraryItem[];
  constructor() { }

  ngOnInit() {
  }
}
