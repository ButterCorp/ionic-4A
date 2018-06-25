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
import { HttpClientModule } from '@angular/common/http';
import { LaunchDetailsPage } from '../pages/launch-details/launch-details';
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { RocketDetailsPage } from '../pages/rocket-details/rocket-details';
import { LaunchpadDetailPage } from '../pages/launchpad-detail/launchpad-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LaunchListPage,
    LaunchDetailsPage,
    LaunchpadPage,
    RocketListPage,
    RocketDetailsPage,
    LaunchpadDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: LaunchListPage, name: 'LaunchListPage', segment: 'launch-list' },
      ]
    }),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LaunchListPage,
    LaunchDetailsPage,
    LaunchpadPage,
    RocketListPage,
    RocketDetailsPage,
    LaunchpadDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider
  ]
})
export class AppModule {}
