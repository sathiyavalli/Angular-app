import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() oldHero: Hero;
  @Output() valueChange = new EventEmitter();
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }
  modelChangeFn(name){
    console.log(name);
    this.valueChange.emit(name);
    console.log(this.heroes.length);
    for (let i = 0; i < this.heroes.length; i++) {
    console.log(this.hero.id);
     if(this.hero.id == this.heroes[i].id){
       console.log(this.heroes[this.heroes.length-1].id);
       return this.heroes.push({
  id: this.heroes[this.heroes.length-1].id+1,
  name: name
});

    }
  }

  }
}
