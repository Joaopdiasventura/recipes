import { RecipesService } from './../../services/recipes.service';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Recipe } from '../../models/Recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  recipe!: Recipe;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipesService: RecipesService
  ) {
    this.getRecipe();
  }

  getRecipe() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipesService.getItem(id).subscribe((r) => (this.recipe = r));
  }
}
