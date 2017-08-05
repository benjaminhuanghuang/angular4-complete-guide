import { EventEmitter, Injectable } from '@angular/core';

//
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'asdfdsa',
      'https://cdn.vox-cdn.com/thumbor/WOgDnXAL2nI4upgY-j8TkV-hrD0=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56029737/akrales_170118_1403_A_0018.0.0.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fish', 20)

      ]),
    new Recipe('Test Recipe 2', 'asdfdsa',
      'https://cdn.vox-cdn.com/thumbor/WOgDnXAL2nI4upgY-j8TkV-hrD0=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56029737/akrales_170118_1403_A_0018.0.0.jpg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Maat', 20)
      ])
  ];
  constructor(private shoppingListService: ShoppingListService)
  {

  }

  getRecipes() {
    return this.recipes.slice();  //return a copy
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.shoppingListService.addIngredients(ingredients);
  }
}