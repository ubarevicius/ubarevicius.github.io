import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { MaterialModule } from '@angular/material';
import { IntegrationService } from './services/integration.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [IntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
