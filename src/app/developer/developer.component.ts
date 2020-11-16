import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer;

  constructor() { }

  ngOnInit(): void {
    const devSkill = new Skill();
    devSkill.name = 'Angular';
    devSkill.site = "https://angular.io/";
    devSkill.logo = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

    const springSkill = new Skill();
    devSkill.name = 'Spring Boot';
    springSkill.site = 'https://spring.io/projects/spring-boot';
    springSkill.logo = 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg';

    this.developer = new Developer();
    this.developer.firstName = 'John';
    this.developer.lastName = 'Doe';
    this.developer.bio = 'Ninja Developer';
    this.developer.skills = [devSkill];
    this.developer.skills.push(springSkill)
  }

}
