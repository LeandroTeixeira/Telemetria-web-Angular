import { Component, OnInit} from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-time]',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  nome : String;
  valor: number;
  unidade: String;

  constructor(private data: DataFetchService) { }

  ngOnInit() {
    this.nome="Tempo";
    this.valor=this.data.getTime();
    this.unidade= "ms";
  }

}
