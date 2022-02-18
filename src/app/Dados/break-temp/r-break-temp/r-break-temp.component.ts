import { Component, OnInit} from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-r-break-temp]',
  templateUrl: './r-break-temp.component.html',
  styleUrls: ['./r-break-temp.component.css']
})
export class RBreakTempComponent implements OnInit {
  nome : String;
  valor: number;
  unidade: String;

  caution:number;
  danger:number;

  constructor(private data: DataFetchService) { }

  ngOnInit() {
    this.nome="Temperatura do Freio Traseiro";
    this.valor=this.data.getRBTemp();
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
