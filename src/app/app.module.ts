import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { GrasshopperComponent } from './components/blog-posts/async-grasshopper-components/async-grasshopper-components.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArcInnovationAwardTechInnovationComponent } from './components/blog-posts/arc-innovation-award-tech-innovation/arc-innovation-award-tech-innovation.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    GrasshopperComponent,
    routingComponents,
    BlogComponent,
    ArcInnovationAwardTechInnovationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
