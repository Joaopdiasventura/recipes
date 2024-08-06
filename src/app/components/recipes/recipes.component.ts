import { Component } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {
    this.getRecipes();
  }

  getRecipes() {
    this.recipesService.getAll().subscribe((r) => (this.recipes = r));
  }
}
