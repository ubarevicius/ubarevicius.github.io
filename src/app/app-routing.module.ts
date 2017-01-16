// app.routing.ts
import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import { GrasshopperComponent } from './components/blog-posts/async-grasshopper-components/async-grasshopper-components.component';
import { ArcInnovationAwardTechInnovationComponent } from './components/blog-posts/arc-innovation-award-tech-innovation/arc-innovation-award-tech-innovation.component';
import { AngularMeetsElectronComponent } from './components/blog-posts/angular-meets-electron/angular-meets-electron.component';

import { BlogComponent } from './components/blog/blog.component';
const routes: Routes = [  
    { path: '', component: BlogComponent },
  { path: 'async-grasshopper-components', component: GrasshopperComponent },
  { path: 'arc-innovation-award-tech-innovation', component: ArcInnovationAwardTechInnovationComponent},
    { path: 'angular-meets-electron', component: AngularMeetsElectronComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [ GrasshopperComponent ];