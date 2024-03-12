const fetcher = async <T>(
  url: string = '',
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'GET',
  body: BodyInit | undefined = undefined
): Promise<{
  dataError: string | undefined;
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

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    if (!contentType?.includes('application/json')) {
      throw new TypeError('Unexpected Content-Type in Response');
    }

    data = await response.json();
  } catch (e) {
    dataError = `Something went wrong when trying to ${method} ${url} ${e instanceof Error ? e.message : ''}`;
  }

  return { dataError, data };
};

export default fetcher;
