import { environment } from './../environments/environment';
import { MapService } from './services/map.service';
import { appRoute } from './../routes';
import { ActivityService } from './services/activity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core'


let glMapToken = environment.GOOGLE_MAP_API_KEY;
@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AgmCoreModule.forRoot({
      apiKey: glMapToken
    })
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
