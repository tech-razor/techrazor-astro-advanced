import { useState, type FormEvent } from 'react';
import fetcher from '../data/fetcher';
import { type Product, type ProductError } from '../models/product';
import {
  productPriceInputName,
  productTitleInputName,
  productTitleMaxLength,
  productTitleMinLength
} from '../data/products';

const NewProductForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<ProductError | undefined>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const { dataError, data: product } = await fetcher<Product>(
      '/api/products',
      'POST',
      formData
    );

    if (!dataError) {
      setSuccessMessage(`${(product as Product).title} added succcessfully`);
      setErrorMessage(undefined);
    } else {
      setErrorMessage({ ...(dataError as ProductError) });
      setSuccessMessage('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title{' '}
          <input
            type="text"
            name={productTitleInputName}
            minLength={productTitleMinLength}
            maxLength={productTitleMaxLength}
            required
            {...(errorMessage?.[productTitleInputName] && {
              className: 'input-error'
            })}
          />
        </label>{' '}
        <label>
          Price{' '}
          <input
            type="number"
            name={productPriceInputName}
            min={1}
            required
            {...(errorMessage?.[productPriceInputName] && {
              className: 'input-error'
            })}
          />
        </label>{' '}
        <button type="submit">Submit</button>
      </form>
      {successMessage && (
        <div className="success-panel" style={{ marginTop: '1rem' }}>
          {successMessage}
        </div>
      )}
      {errorMessage && Object.keys(errorMessage).length > 0 && (
        <div className="error-panel" style={{ marginTop: '1rem' }}>
          {Object.keys(errorMessage).map((key, index) => (
            <p key={index}>{errorMessage[key as keyof ProductError]}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default NewProductForm;
