import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = true;
  showAddDetails = false;
  showAddDetailBtn = true;
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
    {'name':'Arun','type':'frontend developer', 'exp' : '2'},
    {'name':'Akshay','type':'frontend developer', 'exp' : '2'},
    {'name':'Rishabh','type':'frontend developer', 'exp' : '2'},
    {'name':'Yatish','type':'backend developer', 'exp' : '2'},
  ];
  
  addDeveloperData(){
    this.showAddDetails = !this.showAddDetails;
    this.showAddDetailBtn = !this.showAddDetailBtn;
  }
}
