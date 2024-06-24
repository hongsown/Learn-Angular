import { Component } from '@angular/core';

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
}
