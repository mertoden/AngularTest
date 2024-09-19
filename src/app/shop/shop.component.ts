import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { Card } from "../model/card.model";

@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styles: ['.pt-100 {padding-top:100px;}']
})
export class ShopComponent {
    public selectedCategory:Category|null = null;
    public productsPerPage = 3;
    public selectedPage = 1;

    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository,
        private card: Card) {}


    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productsPerPage;
        return this.productRepository
        .getProducts(this.selectedCategory)
        .slice(index,index + this.productsPerPage);
    }

    get pageNumbers(): number[] {
        const products = this.productRepository.getProducts(this.selectedCategory || undefined);
        
        if (!products || products.length === 0) {
            return [];
        }
    
        return Array(Math.ceil(products.length / this.productsPerPage))
            .fill(0)
            .map((a, i) => i + 1);
    }

    changePage(p: number){
        this.selectedPage = p;
    }

    get categories(): Category[]{
        return this.categoryRepository.getCategories();
    }

    changeCategory(newCategory?: Category){
        this.selectedCategory = newCategory || null;
    }

    addProductToCard(product: Product){
        this.card.addItem(product);
    }
}