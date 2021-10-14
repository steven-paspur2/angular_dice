import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  imagen:String='';
  constructor() { }

  ngOnInit(): void {
    this.imagen = '../assets/'+(Math.trunc(Math.random()*6)+1)+'.png';
  }

}
