import { routes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyFieldInput } from '@ngx-formly/primeng/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyDatepickerModule } from '@ngx-formly/primeng/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormlyPrimeNGModule,
      FormlyDatepickerModule,
      FormlyModule.forRoot(
        {
          // wrappers: [{ name: 'form-field-horizontal', component: FormlyHorizontalWrapper }],
          types: [{ name: 'input', component: FormlyFieldInput}],
          validationMessages: [{ name: 'required', message: 'This field is required' }],
        }
      ),
      FormlyBootstrapModule
    ),
    provideRouter(routes)
  ],

};
