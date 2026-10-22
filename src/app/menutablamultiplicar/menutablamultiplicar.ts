import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menutablamultiplicar',
  standalone: false,
  styleUrl: './menutablamultiplicar.css',
  templateUrl: './menutablamultiplicar.html',
})
export class Menutablamultiplicar implements OnInit {
  public numerosAleatorios: number[] = [];

  constructor(
    public ActRouter: ActivatedRoute,
    public router: Router,
  ) {
    this.numerosAleatorios = [];
    for (let i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * 10);
      this.numerosAleatorios.push(random);
    }
  }

  redirect(num: number): void {
    this.router.navigate(['/tabla', num]);
  }

  ngOnInit(): void {}
}
