import { Routes } from '@angular/router';
import { BodyLoginComponent } from './components/pages/Login/login.component';
import { BodyRegisterComponent } from './components/pages/Register/register.component';
import { BodyPerfilComponent } from './components/pages/Perfil/body-perfil.component';
import { SearchComponent } from './components/pages/search/search.component'
import { DetalhesComponent } from './components/pages/detalhes/detalhes.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    { path: '', component: BodyLoginComponent },
    { path: "login", component: BodyLoginComponent },
    { path: "register", component: BodyRegisterComponent },
    { path: "perfil", component: BodyPerfilComponent, canActivate: [AuthGuard] },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: ':id',
                component: DetalhesComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
]
