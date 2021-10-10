import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './components/main/main.component'
import { DetailsMainComponent } from './components/details-main/details-main.component'

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path:':id',
        component: DetailsMainComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule {}