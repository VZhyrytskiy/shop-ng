import { Category } from 'src/app/shared/models/category.model';

export interface ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    quantity?: number;
}
