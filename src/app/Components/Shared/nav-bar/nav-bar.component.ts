import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuBar(){
    let x = document.getElementById('navLink')
    if(x?.style.display == "")
      x.style.display = "flex";
    else
      if(x?.style.display)
        x.style.display = ""
  }

}
