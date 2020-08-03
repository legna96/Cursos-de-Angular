import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'lista-heroes/:termino', component: ListaHeroesComponent },
    { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
