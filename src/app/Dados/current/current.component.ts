import { Component, OnInit} from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-current]',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
  export class CurrentComponent implements OnInit {
  nome : String;
  valor: number;
  
  unidade: String;
  caution: number;
  danger: number;
  
  constructor(private data: DataFetchService) {  }
  ngOnInit() {
    this.nome="Corrente";
    this.valor=this.data.getCurrent();
    this.unidade= "A";
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
