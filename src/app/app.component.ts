import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = '';

  ngOnInit() {
    this.title = 'Ce message d\'accueil provient du composant parent';
  }


  changeTitleOutput(e: string): void {
    this.title = e;
  }

}
