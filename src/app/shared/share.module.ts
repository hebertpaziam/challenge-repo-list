import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

const SHARED_MODULES = [CommonModule, FormsModule, FormsModule, HttpModule, RouterModule];

@NgModule({
    imports: SHARED_MODULES,
    exports: [SHARED_MODULES]
})
export class SharedModule {}
