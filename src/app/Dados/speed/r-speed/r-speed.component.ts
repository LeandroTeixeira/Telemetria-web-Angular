import { Component, OnInit} from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-r-speed]',
  templateUrl: './r-speed.component.html',
  styleUrls: ['./r-speed.component.css']
})
export class RSpeedComponent implements OnInit {
  nome : String;
  valor: number;
  unidade: String;

  constructor(private data: DataFetchService) { 
   
  }
  ngOnInit() {
    this.nome="Velocidade Traseira";
    this.valor=this.data.getRSpeed();
    this.unidade= "km/h";
  }

}
