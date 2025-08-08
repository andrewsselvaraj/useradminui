import { RenderMode, ServerRoute } from '@angular/ssr';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';




export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

@NgModule({
  imports: [HomeComponent,LoginComponent]
})
export class AppRoutesServerModule {}
  
