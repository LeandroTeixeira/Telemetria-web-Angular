import { Component, OnInit, Input } from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';
import { Observable } from 'rxjs';

@Component({
  selector: '[app-b-voltage]',
  templateUrl: './b-voltage.component.html',
  styleUrls: ['./b-voltage.component.css']
})
export class BVoltageComponent implements OnInit {
  nome : String;
  valor;
  unidade: String;
  listener;

  caution:number;
  danger:number;

  constructor(private data: DataFetchService) {}
  ngOnInit() {
    this.nome="Tensão da Bateria";
    this.listener=this.data.getBVoltage().subscribe(x=>{console.log(x);});
    this.unidade= "V";
    this.caution=20;
    this.danger=30;    
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
