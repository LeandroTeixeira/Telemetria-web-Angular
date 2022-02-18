import data from "C:/Users/Usuário/Desktop/Programação/Arquivos/data.json";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataFetchService{
  configUrl: string;
  constructor(private http:HttpClient) {}
        
  ngOnInit() {
    //this.configUrl = "C:/Users/Usuário/Desktop/Programação/Arquivos/data.json";
   this.configUrl = "http://200.248.29:4200";
  };
  
  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename);
  }
  getBVoltage(){return this.getTextFile(this.configUrl)}// data.BVoltage;}
  getFBTemp(){return data.FBTemp}
  getRBTemp(){return data.RBTemp;}
  getCurrent(){return data.Current;}
  getFSpeed(){return data.FSpeed;}
  getRSpeed(){return data.RSpeed;}
  getTemperature(){return data.Temperature;}
  getTime(){return data.Time;}
  getTPS(){return data.TPS;}
  getWPosition(){return data.WPosition;}
}