import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GamesService } from './services/games.service';
import { ImgComponent } from './about/img/img.component';
import { GridCardsComponent } from './about/grid-cards/grid-cards.component';
import { MainInfoComponent } from './about/main-info/main-info.component';
import { ContactComponent } from './about/contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ImgComponent,
    GridCardsComponent,
    MainInfoComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule
  ],
  providers:[
    GamesService
  ],
  exports: [
    HomeComponent,
    AboutComponent,
   ]
})
export class PagesModule { }
