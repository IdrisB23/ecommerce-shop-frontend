import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
