import React, { useState, ReactNode } from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonSelect, IonSelectOption, IonChip} from '@ionic/react';
import productData from '../data/current_cultivation.json';
import '../theme/ProductComponent.css';

interface Product {
    name: string;
    image: string;
    description: string;
    price: number;
    categories: string[];
}

const WhatsGrowing = () => {
    
    const products = productData.whats_growing;
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
                  <IonCardTitle>{product.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
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
    <IonGrid className='product-grid mt-68'>
         <div className='text-center mt-68'>
          <h3>Current Cultivations</h3>
        </div>
        {renderProducts()}
    </IonGrid>
  );
};

export default WhatsGrowing;