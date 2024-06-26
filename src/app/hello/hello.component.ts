import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() name: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log("hello component init")
  }
  ngOnDestroy(): void {
    console.log("hello component destroy")
  }


}
