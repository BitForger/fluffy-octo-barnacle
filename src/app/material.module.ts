import { NgModule }                                                               from '@angular/core';
import { MatButtonModule, MatCardModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {
}
