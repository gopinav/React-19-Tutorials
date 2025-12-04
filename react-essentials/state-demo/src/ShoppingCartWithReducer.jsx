import { useReducer } from "react";

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
  items: [], // {id, name, price, quantity}
  totalAmount: 0,
  totalItems: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItems;

      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: updatedItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }

    case REMOVE_ITEM: {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        items: filteredItems,
        totalAmount: filteredItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: filteredItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }

    case UPDATE_QUANTITY: {
      if (action.payload.quantity === 0) {
        // If quantity is 0, remove the item
        return reducer(state, {
          type: "REMOVE_ITEM",
          payload: { id: action.payload.id },
        });
      }

      const updatedQuantityItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        ...state,
        items: updatedQuantityItems,
        totalAmount: updatedQuantityItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: updatedQuantityItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export const ShoppingCartWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const products = [
    { id: 1, name: "React Course", price: 49.99 },
    { id: 2, name: "Node.js Course", price: 39.99 },
    { id: 3, name: "JavaScript Bundle", price: 89.99 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name} - ${product.price}
          </h3>
          <button
            onClick={() =>
              dispatch({
                type: ADD_ITEM,
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <div>
        <h2>Shopping Cart</h2>

        {state.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name} - ${item.price} x {item.quantity}
                </p>
                <button
                  onClick={() =>
                    dispatch({
                      type: UPDATE_QUANTITY,
                      payload: { id: item.id, quantity: item.quantity - 1 },
                    })
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: UPDATE_QUANTITY,
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: REMOVE_ITEM,
                      payload: { id: item.id },
                    })
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            <h3>Total Items: {state.totalItems}</h3>
            <h3>Total Amount: ${state.totalAmount.toFixed(2)}</h3>
            {state.items.length > 0 && (
              <button onClick={() => dispatch({ type: CLEAR_CART })}>
                Clear Cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
