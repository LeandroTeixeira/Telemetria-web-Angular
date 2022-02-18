import { Component, OnInit, Input } from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-tps]',
  templateUrl: './tps.component.html',
  styleUrls: ['./tps.component.css']
})
export class TPSComponent implements OnInit {
  nome : String;
  @Input() valor: number;
  unidade: String;

  constructor(private data: DataFetchService) {} 

  ngOnInit() {
    this.nome = "TPS";
    this.valor = this.data.getTPS();
    this.unidade = "%";
  }

}
