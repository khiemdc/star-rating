import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingComponent } from './rating/rating.component';
import { MaterialModule } from './material.module';

@NgModule({
   declarations: [
      AppComponent,
      RatingComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule
    ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
