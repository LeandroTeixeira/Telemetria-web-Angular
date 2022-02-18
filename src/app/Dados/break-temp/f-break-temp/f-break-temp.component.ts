import { Component, OnInit} from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-f-break-temp]',
  templateUrl: './f-break-temp.component.html',
  styleUrls: ['./f-break-temp.component.css']
})
export class FBreakTempComponent implements OnInit {
  nome : String;
  valor: number;
  unidade: String;

  caution:number;
  danger:number;

  constructor(private data: DataFetchService) {  }

  ngOnInit() {
    this.nome="Temperatura do Freio Dianteiro";
    this.valor=this.data.getFBTemp();
    this.unidade= "°C";
    this.caution=80;
    this.danger=90;
  }
  getBGColor(){
    if(this.valor<this.caution)
      return ;
    if(this.valor<this.danger)
      return "yellow";
    return "red";
  }
  getTextColor(){
    if(this.valor<this.caution)
      return ;
    if(this.valor<this.danger)
      return "darkgreen";
    return "yellow";
  }

}
