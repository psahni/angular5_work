import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo.component.html'
})

export class DemoComponent {


  updateVol(event) {
    console.log(event.srcElement.value);
  }
}
