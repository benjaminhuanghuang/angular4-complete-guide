import { Component, OnInit } from '@angular/core';

//
import { Recipe } from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('asdfa','asdfdsa','https://cdn.vox-cdn.com/thumbor/WOgDnXAL2nI4upgY-j8TkV-hrD0=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56029737/akrales_170118_1403_A_0018.0.0.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
