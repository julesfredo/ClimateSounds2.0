import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// declare var $: any;


export class AppComponent implements OnInit{
  ngOnInit(): void {
    // $(window)
  }

  title = 'SoundOn';
  
  

  // When the user scrolls the page, execute myFunction
// window = function() {
//   myFunction()
// };
// // Get the navbar
//  navbar = document.getElementById("navbar");
// // Get the offset position of the navbar
//  sticky = navbar.offsetTop;
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
}
