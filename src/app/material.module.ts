import { NgModule }                                         from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}
