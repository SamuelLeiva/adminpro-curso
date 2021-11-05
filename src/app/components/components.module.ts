import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdderComponent } from './adder/adder.component';

@NgModule({
  declarations: [AdderComponent],
  exports: [AdderComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
