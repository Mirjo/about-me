import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ])
    ],
    providers: [],

})
export class HomeModule { }