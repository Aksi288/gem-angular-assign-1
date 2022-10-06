import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gem-angular-assign-1';

  isToggle = false;
  countClicks = 0;
  inputText = ""
  
  toggleBtn() {
    this.isToggle = !this.isToggle;
    console.log(this.countClicks)
    this.countClicks++;
  }

  list: any = []; // try to not use 'any' type
  
  addItem(item: any) {
    if (item == "") {
      alert("Please enter something!");
    }
    else {
      this.list.push(item);
      this.inputText = ""
    }
  }

}

