import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = true;
  counter = 0;
  toggleDiv(){
    this.visible = !this.visible;
    this.counter++;
  }
  myFavLang = {
    'frontend': ['html','css','javascript'],
    'backend':['nodejs','php','python','ruby']
  };
  myFavLangArray = [
    {'name':'html','type':'frontend'},
    {'name':'css','type':'frontend'},
    {'name':'js','type':'frontend'},
    {'name':'ruby','type':'backend'},
  ];
}
