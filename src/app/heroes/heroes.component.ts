import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  title = 'Tour of Heroes';
  heroes: Hero[]; // 생성자 형성하면서 함수를 getHeroes함수를 호출하는 것 보다 lifecycle hook 상에서 처리하도록 하는 것이 좋다.
  selectedHero: Hero;

  constructor(
    private heroservice: HeroService,
    private _router: Router
    ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.heroservice.getHeroes()
    .then(result => this.heroes = result);
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }
}
