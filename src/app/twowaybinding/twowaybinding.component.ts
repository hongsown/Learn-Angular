import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})
export class TwowaybindingComponent implements OnInit {

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  toggle(item: any) {
    console.log("click", item.target)
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
