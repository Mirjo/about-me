import { NgModule } from '@angular/core';
import { KnowHowComponent } from './know-how.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        KnowHowComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: KnowHowComponent
            }
        ])
    ],
    providers: [],

})
export class KnowHowModule { }