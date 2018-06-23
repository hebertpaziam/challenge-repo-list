import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

const SHARED_MODULES = [CommonModule, FormsModule, FormsModule, HttpModule, RouterModule];
const SHARED_COMPONENTS = [];

@NgModule({
    imports: SHARED_MODULES,
    exports: [SHARED_MODULES, SHARED_COMPONENTS],
    declarations: SHARED_COMPONENTS
})
export class SharedModule {}
