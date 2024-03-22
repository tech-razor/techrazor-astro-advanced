import type { ProductError } from '../models/product';

const fetcher = async <T>(
  url: string = '',
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'GET',
  body: BodyInit | undefined = undefined
): Promise<{
  dataError: string | ProductError | undefined;
  data: Array<T> | T | undefined;
}> => {
  let dataError;
  let data;

  const fetchOptions: RequestInit = {
    method,
    credentials: 'same-origin'
  };

  fetchOptions.headers = new Headers();

  if (['POST', 'PUT', 'PATCH'].includes(method) && body) {
    if (body instanceof FormData) {
      fetchOptions.body = body;
    } else if (typeof body === 'string' || body instanceof String) {
      fetchOptions.headers.append(
        'Content-Type',
        'application/x-www-form-urlencoded'
      );

      fetchOptions.body = body;
    } else {
      fetchOptions.headers.append('Content-Type', 'application/json');
      fetchOptions.body = JSON.stringify(body);
    }
  }

  try {
    const response = await fetch(url, fetchOptions);
    const contentType = response.headers.get('content-type');
    const isJsonResponse = contentType?.includes('application/json');

    if (!response.ok) {
      if (isJsonResponse) {
        data = await response.json();

        if (data.errors) {
          return { dataError: data.errors, data: undefined };
        }
      }

      throw new Error(`${response.status}: ${response.statusText}`);
    }

    if (!isJsonResponse) {
      throw new TypeError('Unexpected Content-Type in Response');
    }

    data = await response.json();
  } catch (e) {
    dataError = `Something went wrong when trying to ${method} ${url} ${e instanceof Error ? e.message : ''}`;
  }

  return { dataError, data };
};

export default fetcher;
