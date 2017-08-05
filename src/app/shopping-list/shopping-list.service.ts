import { EventEmitter } from '@angular/core';

//
import { Ingredient } from "../shared/ingredient.model"

export class ShoppingListService{
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Dog", 5)
  ];
}