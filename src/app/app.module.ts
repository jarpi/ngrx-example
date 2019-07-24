import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { LoaderStarterComponent } from './components/loader-starter/loader-starter.component';
import { StoreModule } from '@ngrx/store';
import * as fromUiState from './reducers/ui-state';

@NgModule({
  declarations: [
    AppComponent,
    LoaderStarterComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({ uiState: fromUiState.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
