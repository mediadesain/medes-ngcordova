import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-crodova-view';
  
  constructor(){
    console.log(cordova)
  }

  openInApp(){
    if (window.cordova) {
      cordova.InAppBrowser.open("https://www.mediadesain.com","_blank","location=no");
    } else {
      window.open("https://www.mediadesain.com","_system");
    }  
  }

  openExternal(){
    if (window.cordova) {
      cordova.InAppBrowser.open("https://www.mediadesain.com","_system");
    } else {
      window.open("https://www.mediadesain.com","_system");
    }
  }

}
