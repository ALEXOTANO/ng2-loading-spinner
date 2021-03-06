import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ColorPickerModule } from 'ngx-color-picker';
import {Ng2LoadingSpinnerModule} from '../projects/ng2-loading-spinner/src/public_api';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        FormsModule,
        Ng2LoadingSpinnerModule,
        ColorPickerModule
    ],
    providers   : [],
    bootstrap   : [ AppComponent ]
})
export class AppModule {
}
