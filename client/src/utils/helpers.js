// export const isInCart = (product, cartItems) => {
//     return cartItems.find(item => item.id === product.id);
// }

// const API = 'http://localhost:8080';

// export async function fetchFromAPI(endpoint, opts) {
//     const { method, body } = { method: 'POST', body: null, ...opts };

//     const res = await fetch(`${API}/${endpoint}`, {
//         method,
//         ...(body && { body: JSON.stringify(body) }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     return res.json()
// }

export const isInCart = (product, cartItems) => {
    return cartItems.find(item => item.id === product.id);
  }
  
  const API = 'https://nd-card-shop.herokuapp.com';
  
  export async function fetchFromAPI(endpoint, opts) {
    const { method, body } = { method: 'POST', body: null, ...opts };

    const res = await fetch(`${API}/${endpoint}`, {
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  
      return res.json();
  }