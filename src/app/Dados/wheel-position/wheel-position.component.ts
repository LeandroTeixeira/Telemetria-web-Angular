import { Component, OnInit} from '@angular/core';
import { DataFetchService } from 'src/data_fetch.service';

@Component({
  selector: '[app-wheel-position]',
  templateUrl: './wheel-position.component.html',
  styleUrls: ['./wheel-position.component.css']
})
export class WheelPositionComponent implements OnInit {
  nome : String;
  valor: number;
  unidade: String;

  constructor(private data: DataFetchService) { }

  ngOnInit() {this.nome="Posição do Volante";
    this.valor = this.data.getWPosition();
    this.unidade = "Graus";
  }

}
