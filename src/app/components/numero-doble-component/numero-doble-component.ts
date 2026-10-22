import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit{
  public doble!: number;
  public numero!: number;
  

  constructor(private _activeRoute: ActivatedRoute,
    private router:Router,
    private cdr: ChangeDetectorRef
  ){
    this.doble = 2
  }

  goToHome(){
    this.router.navigate(['/'])
  }

  redirect():void{
    const valor = window.prompt("Escriba el número")
    const numero = Number(valor)
    this.router.navigate(["/numerodoble", numero])
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) =>{
      if(parametros['numero'] != null){
        this.numero = parseInt(parametros['numero'])
        this.doble = this.numero * 2;
        this.cdr.detectChanges()
      }
    })
  }


}
