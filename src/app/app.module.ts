import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2LoadingSpinnerModule } from '../../projects/ng2-loading-spinner/src/public_api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BusyModule } from 'angular2-busy';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        Ng2LoadingSpinnerModule,
        BrowserAnimationsModule,
        BusyModule,
        ColorPickerModule,
        FormsModule
    ],
    providers   : [],
    bootstrap   : [ AppComponent ]
})
export class AppModule {
}