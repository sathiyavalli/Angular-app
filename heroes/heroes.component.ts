import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  hero:string;

  heroes: Hero[];
  deletedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
}
delete(hero: Hero){
  this.deletedHero = hero;
  const index = this.heroes.indexOf(hero);
  if(index > -1){
    this.heroes.splice(index,1);
    this.messageService.messages = [];
    this.messageService.add(`HeroesComponent: Deleted hero id=${this.deletedHero.id}`);
  }
  console.log(this.deletedHero);
}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}


}
