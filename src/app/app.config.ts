// import { ApplicationConfig, importProvidersFrom } from "@angular/core";
// import { provideRouter } from "@angular/router";
// import { firebaseProviders } from "./firebase.config";
// import { routes } from './app-routing.module'
// import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
// import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

// const NO_NG_MODULES = importProvidersFrom([BrowserAnimationsModule]);

// export const appConfig : ApplicationConfig = {
//     providers: [
//         provideRouter(routes), 
//         firebaseProviders,
//         NO_NG_MODULES,
//     {
//         provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
//         useValue: {
//             appearance: 'outline',
//             color: 'accent',
//         },
//     },
//     provideAnimations()
//     ]
// }



import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { firebaseProviders } from './firebase.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
// import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


const NO_NG_MODULES = importProvidersFrom([BrowserAnimationsModule]);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    firebaseProviders,
    importProvidersFrom(
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatSnackBarModule,
      ReactiveFormsModule,
    ),
  ],
};
