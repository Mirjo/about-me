import { NgModule } from '@angular/core';
import { SideProjectsComponent } from './side-projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SideProjectsComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SideProjectsComponent
            }
        ])
    ],

})
export class SideProjectsModule { }