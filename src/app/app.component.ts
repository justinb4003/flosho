import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flosho';

  constructor(
    private dbService: DbService,
  ) {}

  ngOnInit(): void {
    console.log('init hit');
  }
}
