import { Component,ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  // @ViewChild('nameRef') nameElementRef:ElementRef ;

  @ViewChild('navLinkRef') navLinkElementRef:ElementRef;
  
  constructor() { 
    
    
  }

  ngAfterViewInit(){
  //   console.log(this.nameElementRef.nativeElement.innerHTML);
  //   this.nameElementRef.nativeElement.style.color="yellow";
  }

  handleBar(){
    let x =this.navLinkElementRef.nativeElement.style;
    if( x.display === "")
      x.display = "flex";
    else
      x.display = "";
    
  }

 

}
