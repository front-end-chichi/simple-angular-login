import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  onButtonGroupClick(event){
    let clickedElement = event.target;

    let activeButton = clickedElement.parentElement.querySelector(".active");
    if( activeButton ) {
      activeButton.classList.remove("active");
    }

    clickedElement.className += " active";
    

  }
}
