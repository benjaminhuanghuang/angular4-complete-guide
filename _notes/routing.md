
```
  <li> <a routerLink="/recipe">Recipes</a> </li>
  <li> <a routerLink="/shopping-list">Shopping List</a> </li>
```

```
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
```

## Active link/route
```
  <li routerLinkActive="active"> <a routerLink="/recipes">Recipes</a> </li>
```

## Child Route
  