import React, { useState, ReactNode } from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonIcon} from '@ionic/react';
import productData from '../data/regularly_grown_plants_homepage.json';
import '../theme/ProductComponent.css';

interface Product {
    name: string;
    image: string;
    description: string;
    price: number;
    categories: string[];
}

const ProductPage = () => {
    
    const products = productData.products;
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryFilter = (event: CustomEvent) => {
        setSelectedCategory(event.detail.value);
    };

    const renderProducts = () => {
      let filteredProducts = selectedCategory ? products.filter(product => product.categories.includes(selectedCategory)) : products;

      const rows: ReactNode[] = [];
      let productsPerRow = 4;
      let maxRows = 5;
      
      for (let i = 0; i < maxRows; i++) {
          const row = filteredProducts.slice(i * productsPerRow, (i + 1) * productsPerRow).map((product, index) => (
            <IonCol size-lg="3" size-md="6" size-sm="12" key={index}>
              <IonCard>
                <IonImg className="product-image" src={product.image} alt={product.name} />
                <IonCardHeader className='pad-bot-0'>
                  {/* <IonCardSubtitle>Php {product.price.toFixed(2)}</IonCardSubtitle> */}
                  <IonCardTitle>{product.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p className="italic">{product.description}</p>
                  {/* <div className='product-categories'>
                    <p>{product.categories.join(', ')}</p>
                  </div> */}
                </IonCardContent>
              </IonCard>
            </IonCol>
        ));

        rows.push(
          <IonRow key={i} className='display-f-none'>
            {row}
          </IonRow>
        );
      }

      return rows;
  };

  return (
    <IonGrid className='product-grid'>
        {/* <div className="filter-container">
            <IonSelect
            value={selectedCategory}
            placeholder="Select a category"
            onIonChange={handleCategoryFilter}
            >
            <IonSelectOption value={null}>Filter Category - All</IonSelectOption>
            {productData.products.reduce<string[]>((categories, product) => {
                product.categories.forEach(category => {
                if (!categories.includes(category)) {
                    categories.push(category);
                }
                });
                return categories;
            }, []).map((category, index) => (
                <IonSelectOption key={index} value={category}>{category}</IonSelectOption>
            ))}
            </IonSelect>
        </div> */}
        <div className='text-center mt-68'>
          <h3>Collections</h3>
        </div>
        <div>
          {renderProducts()}
        </div>
    </IonGrid>
  );
};

export default ProductPage;