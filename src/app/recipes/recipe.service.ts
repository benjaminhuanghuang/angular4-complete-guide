import { EventEmitter } from '@angular/core';

//
import { Recipe } from './recipe.model';

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'asdfdsa', 'https://cdn.vox-cdn.com/thumbor/WOgDnXAL2nI4upgY-j8TkV-hrD0=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56029737/akrales_170118_1403_A_0018.0.0.jpg'),
    new Recipe('Test Recipe 2', 'asdfdsa', 'https://cdn.vox-cdn.com/thumbor/WOgDnXAL2nI4upgY-j8TkV-hrD0=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56029737/akrales_170118_1403_A_0018.0.0.jpg')
  ];


  getRecipes(){
    return this.recipes.slice();  //return a copy
  }
}