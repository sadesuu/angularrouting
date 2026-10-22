import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  styleUrl: './tablamultiplicar.css',
  templateUrl: './tablamultiplicar.html',
})
export class Tablamultiplicar {
  numero = 0;
  result: number[] = [];

  constructor(private route: ActivatedRoute, private cdr : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const parametro = params['numero'];

      if (parametro !== null) {
        this.numero = Number(parametro);

        this.result = [];

        for (let i = 1; i <= 10; i++) {
          this.result.push(this.numero * i);
        }
        this.cdr.detectChanges()
      }
    });
  }
}