import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class animalComponent implements OnInit {
  private urlOriginal: string = '';
  @Input() descricao: string = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  getUrl(): string {
    return this.urlOriginal;
  }

  constructor() {}

  ngOnInit(): void {}
}
