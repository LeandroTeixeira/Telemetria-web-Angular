import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FSpeedComponent } from './Dados/speed/f-speed/f-speed.component';
import { RSpeedComponent } from './Dados/speed/r-speed/r-speed.component';
import { BVoltageComponent } from './Dados/b-voltage/b-voltage.component';
import { FBreakTempComponent } from './Dados/break-temp/f-break-temp/f-break-temp.component';
import { RBreakTempComponent } from './Dados/break-temp/r-break-temp/r-break-temp.component';
import { TemperatureComponent } from './Dados/temperature/temperature.component';
import { CurrentComponent } from './Dados/current/current.component';
import { WheelPositionComponent } from './Dados/wheel-position/wheel-position.component';
import { TPSComponent } from './Dados/tps/tps.component';
import { TimeComponent } from './Dados/time/time.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DataFetchService } from 'src/data_fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    FSpeedComponent,
    RSpeedComponent,
    BVoltageComponent,
    FBreakTempComponent,
    RBreakTempComponent,
    TemperatureComponent,
    CurrentComponent,
    WheelPositionComponent,
    TPSComponent,
    TimeComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
