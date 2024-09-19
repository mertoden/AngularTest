import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RestService } from "./rest.service";
import { ProductRepository } from "./product.repository";
import { CategoryRepository } from "./category.repository";
import { Card } from "./card.model";

@NgModule({
imports: [HttpClientModule],
providers: [RestService, ProductRepository,CategoryRepository,Card]
})
export class ModelModule{}