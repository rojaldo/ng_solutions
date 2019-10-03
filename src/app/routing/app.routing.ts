import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '.././components/heroes/heroes.component';
import { ApodComponent } from '.././components/apod/apod.component';
import { BeersComponent } from '.././components/beers/beers.component';
import { CountriesComponent } from '.././components/countries/countries.component';
import { FormComponent } from '.././components/form/form.component';
import { ReactiveFormComponent } from '.././components/reactive-form/reactive-form.component';
import { CalculatorComponent } from '.././components/calculator/calculator.component';
const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'calculator', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'apod', component: ApodComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'beers', component: BeersComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'form', component: FormComponent },
    { path: 'reactive', component: ReactiveFormComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);