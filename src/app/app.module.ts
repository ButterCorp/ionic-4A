import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LaunchDetailsPage } from '../pages/launch-details/launch-details';
import { LaunchDetailsPageModule } from '../pages/launch-details/launch-details.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LaunchListPage,
    LaunchDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LaunchListPage,
    LaunchDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider
  ]
})
export class AppModule {}