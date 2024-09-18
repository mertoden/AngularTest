import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    imports: [ModelModule,CommonModule,FormsModule],
    declarations: [ShopComponent,NavbarComponent],
    exports: [ShopComponent]
    })

    export class ShopModule {}