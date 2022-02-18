import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-f-speed]',
  templateUrl: './f-speed.component.html',
  styleUrls: ['./f-speed.component.css']
})
export class FSpeedComponent implements OnInit {
  nome : String;
  valor: number;
  unidade: String;

  constructor(private data: DataFetchService) {}
  ngOnInit() {
    this.nome="Velocidade Dianteira";
    this.valor=this.data.getFSpeed();
    this.unidade= "km/h";
  }

}
