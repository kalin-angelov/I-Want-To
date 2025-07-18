import { create } from 'zustand';

export const useWishStore = create ((set) => ({
    wishes: [],
    setWishes: (wishes) => set( {wishes} ),
    createWish: async(newWish) => {

        if(!newWish.wish) {
            return { success: false, message: "Please don't make empty wishes."};
        }

        const response = await fetch(`api/v1/wishes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(newWish)
        });

        const data = await response.json();
        set((state) => ({wishes:[...state.wishes, data.wish]}));
        return { success: true, message: "Wish added successfully."};
    },
    fetchWishes: async() => {
        const response = await fetch(`api/v1/wishes`);
        const data = await response.json();
        set({ wishes: data});
    },
    deleteWish: async(id) => {
        const response = await fetch(`api/v1/wishes/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        if (!data.successful) return { success: false, message: data.message };
        set(state => ({ wishes: state.wishes.filter(wish => wish._id !== id) }));
        return { success: true, message: data.message };
    },
    updateWish: async(id, updatedWish) => {
        if(!updatedWish.wish) return { success: false, message: "Please don't make empty wishes"}
        const response = await fetch(`api/v1/wishes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedWish)
        });

        const data = await response.json();
        if(!data.successful) return { success: false, message: data.message }
        set(state => ({ wishes: state.wishes.map(wish => wish._id === id ? data.wish : wish) }));
        return { success: true, message: data.message };
    }
}));