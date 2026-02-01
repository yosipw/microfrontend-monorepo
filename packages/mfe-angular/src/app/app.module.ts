import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Remove AppComponent from here
  ],
  imports: [
    BrowserModule,
    AppComponent  // Import it here instead
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }