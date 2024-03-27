export function reducer(state, { type, payload }) {
  // console.log(state);
  //
  switch (type) {
    // SET_GOODS start
    case "SET_GOODS":
      return {
        ...state,
        goods: payload,
        loading: false,
      };
    // SET_GOODS end

    //ADD_TO_CARD start
    case "ADD_TO_CARD": {
      const productIndex = state.order.findIndex(
        (product) => product.id === payload.id
      );

      let newOrder = null;

      if (productIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((product, index) => {
          if (index === productIndex) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        displayName: payload.displayName,
      };
    }
    //ADD_TO_CARD end

    //CLOSE_ALERT start
    case "CLOSE_ALERT": {
      return {
        ...state,
        displayName: "",
      };
    }
    //CLOSE_ALERT end

    // showBasket start
    case "SHOW_BASKET": {
      return {
        ...state,
        showBasket: !state.showBasket,
      };
    }
    // showBasket end

    //plus
    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        order: state.order.map((item) => {
          // console.log(item.quantity);
          if (item.id === payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      };
    }
    //add quantity end

    // minus start
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        }),
      };
    }
    //minus end

    // удаление продукта from cart
    case "DELETE_PRODUCT_CART": {
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    }

    default:
      return state;
  }
}
