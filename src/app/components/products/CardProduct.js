import React from 'react';
import ModalProduct from './ModalProduct';

const CardProduct = ({ product }) => {
    return (
        <div className="col-sm-4">
            <div className="card">
                <img
                    width="auto"
                    height="170"
                    src={ process.env.PUBLIC_URL + `/assets/${ product.category }/${ product.image }` }
                    alt={ product.name }
                />
                <div className="card-body">
                    <div className="d-flex justify-content-around">
                        <h4 className='text-justify text-center'>{ product.name }</h4>
                        <p style={{ marginTop:'5px' }}>{ product.price }€</p>
                    </div>
                    
                        
                    
                </div>
                <button 
                            className="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target={ `#${ product.ref }` }
                        >
                            Voir Produit
                        </button>
            </div>
            <ModalProduct 
                product={ product } 
            />
        </div>
    );
};

  export default CardProduct;