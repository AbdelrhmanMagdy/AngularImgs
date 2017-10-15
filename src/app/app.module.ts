import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRequestsService } from './my-requests.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }from './home/home.component';
const appRoutes=[
  {path:'', component: HomeComponent },
  {path:'about', component:AboutComponent},
  {path:'photos', component:PhotosComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhotosComponent,
    AboutComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )  ],
  providers: [MyRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
