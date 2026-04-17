import { create } from 'zustand';

export const usePosStore = create((set) => ({
  cart: [],
  
  // Logic to add items or increase quantity if already there
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find(item => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  // Remove item entirely
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),

  // Clear everything after a sale
  clearCart: () => set({ cart: [] }),
}));