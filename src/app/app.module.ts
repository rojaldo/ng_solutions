import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/display/display.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroService } from './services/hero.service';
import { CalculatorService } from './services/calculator.service';
import { ApodComponent } from './components/apod/apod.component';
import { ApodService } from './services/apod.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowApodComponent } from './components/show-apod/show-apod.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { BeersComponent } from './components/beers/beers.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AlcoholPipe } from './pipes/alcohol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroListComponent,
    ApodComponent,
    ShowApodComponent,
    BeersComponent,
    AlcoholPipe  
  ],
  imports: [
    BrowserModule, 
    NgbModule, 
    FormsModule, 
    HttpClientModule, 
    NgxYoutubePlayerModule.forRoot(),
    Ng5SliderModule 
  ],
  providers: [HeroService, CalculatorService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
