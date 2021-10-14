import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';
import { NabvarComponent } from './components/nabvar/nabvar.component'
import { MaterialModule } from '../material/material.module'
import { CardElementComponent } from './components/card-element/card-element.component';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ErrorTailorModule} from '@ngneat/error-tailor';
import { DetailsMainComponent } from './components/details-main/details-main.component';

@NgModule({
  declarations: [
    MainComponent,
    NabvarComponent,
    CardElementComponent,
    CreateNewProductComponent,
    DetailsMainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) =>
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ]
})
export class HomeModule { }
