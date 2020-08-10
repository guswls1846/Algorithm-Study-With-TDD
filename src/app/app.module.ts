import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SteppingStoneSurvivorComponent } from './stepping-stone-survivor/stepping-stone-survivor.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SteppingStoneSurvivorComponent,
    DecryptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
