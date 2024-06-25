import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnAngular';
  user = {
    name: 'John Doe',
    age: 30
  }
  handler() {
    alert('clicked')
  }
  tags = ['angular', 'js', 'ts']
  isDanger = false
  isWarning = false

  checked = false
  showLast = true
  // toggleComp it will same template variable set in the file html or can pass the comp like this @ViewChild('TwowaybindingComponent') toggleComp: TwowaybindingComponent | undefined;
  // static default value is false, if true then it will be available in ngOnInit but the template variable dont stay in the structure directive
  // @ViewChild(TwowaybindingComponent, { static: true }) toggleComp: TwowaybindingComponent | undefined;
  @ViewChild('nameInput', { static: true }) nameInputElement: ElementRef<HTMLInputElement> | undefined;
  @ViewChildren(TwowaybindingComponent) toggleComp: QueryList<TwowaybindingComponent> | undefined;
  ngOnInit() {
    console.log('on init', this.toggleComp)
    this.nameInputElement?.nativeElement.focus()
  }
  ngAfterViewInit() {
    console.log(this.toggleComp)
    this.toggleComp?.changes.subscribe(console.log)
  }
}
