import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})

export class Exercice1Component implements OnInit {
  public interpolation = 'Yeah !';
  public DoubleDataBinding = '';
  public OutPutTest: string;
  public message: string;
  public afficheOutPut: string;
  @Input() public title: string;
  @Output() public outputLink: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }


  reinit() {
   this.DoubleDataBinding = '';
   this.message = 'L\'écouteur d\'événement fonctionne aussi !';
  }


  changeTitle(e: string) {
    this.outputLink.emit(e);
    this.afficheOutPut = 'Vous avez changé le titre grâce à une liaison Output';
  }
}
