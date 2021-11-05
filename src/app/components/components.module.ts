import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AdderComponent } from './adder/adder.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [AdderComponent, DoughnutComponent],
  exports: [AdderComponent, DoughnutComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
