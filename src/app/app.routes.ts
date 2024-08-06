import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeComponent },
];
