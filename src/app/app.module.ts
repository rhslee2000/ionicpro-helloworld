import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VibeComponent } from './pages/vibe/vibe.component';
import { VibeFormComponent } from './pages/vibe/vibe-form/vibe-form.component';

import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    VibeComponent,
    VibeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VibeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
