import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;   // parent component will pass recipe through this property

  // Use server to replace the event emitter
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  } 

  onSelected(){
    // Use server to replace the event emitter
    //this.recipeSelected.emit();
    
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
