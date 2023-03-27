import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ComponentListComponent } from './component-list/component-list.component'; 
import { ComponentDetailComponent } from './component-detail/component-detail.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/componentList", pathMatch: "full" },
  { path: 'componentList', component: ComponentListComponent },
  { path: "componentList/:id", component: ComponentDetailComponent },
  { path: "**", component: PageNotFoundComponent }
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
