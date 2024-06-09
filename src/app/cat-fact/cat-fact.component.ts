import { Component, inject } from '@angular/core';
import { CatFactService } from './cat-fact.service';
import { CommonModule } from '@angular/common';
import { CatFact } from '../interfaces/data';

@Component({
  selector: 'app-cat-fact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-fact.component.html',
  styleUrl: './cat-fact.component.scss'
})
export class CatFactComponent {
  
  catFact: any = {};
  private catFactService = inject(CatFactService);

  ngOnInit(): void {
    this.getCatFact();
  }

  getCatFact() {
    this.catFactService.getCatFact().subscribe({
      next: (response: CatFact[]) => {
        this.catFact = response;
      },
      error: (error: Error) => {
        console.error('Error', error);
      },
    });
  }
}
