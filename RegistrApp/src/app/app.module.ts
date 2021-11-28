import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import {DataBaseService} from '../app/servicios/data-base.service';	


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    SQLitePorter,
    StatusBar,
    SplashScreen,
    Camera,
    WebView
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(db: DataBaseService){}

}
