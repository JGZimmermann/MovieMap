import { Routes } from '@angular/router';
import { BodyHomeComponent } from './components/pages/Home/body-home.component';
import { BodyLoginComponent } from './components/pages/Login/login.component';
import { BodyRegisterComponent } from './components/pages/Register/register.component';
import { BodyPerfilComponent } from './components/pages/Perfil/body-perfil.component';
import { BodySingleFilmeComponent } from './components/pages/SingleFilme/body-single-filme.component';
import { SearchComponent } from './components/pages/search/search.component'

export const routes: Routes = [
    {path: '', component: BodyHomeComponent},
    {path: "login", component: BodyLoginComponent},
    {path: "register", component: BodyRegisterComponent},
    {path: "perfil", component: BodyPerfilComponent},
    {path: "singlefilme", component: BodySingleFilmeComponent},
    {path: "search", component: SearchComponent}
]
