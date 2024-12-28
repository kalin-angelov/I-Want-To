import { create } from 'zustand';

export const useWhishStore = create ((set) => ({
    whishes: [],
    setWhishes: (whishes) => set( {whishes} ),
    createWhish: async(newWhish) => {

        if(!newWhish.whish) {
            return { success: false, message: "Please don't make empty whishes."};
        }

        const response = await fetch(`api/whish`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(newWhish)
        });

        const data = await response.json();
        set((state) => ({whishes:[...state.whishes, data.data]}));
        return { success: true, message: "Whish added successfully."};
    },
    fetchWhishes: async() => {
        const response = await fetch(`api/whishes`);
        const data = await response.json();
        set({ whishes: data.data});
    },
    deleteWhish: async(id) => {
        const response = await fetch(`api/whish/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        if (!data.success) return { success: false, message: data.message };
        set(state => ({ whishes: state.whishes.filter(whish => whish._id !== id) }));
        return { success: true, message: data.message };
    },
    updateWhish: async(id, updatedWhish) => {
        if(!updatedWhish.whish) return { success: false, message: "Please don't make empty whishes"}
        const response = await fetch(`api/whish/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedWhish)
        });

        const data = await response.json();
        if(!data.success) return { success: false, message: data.message }
        set(state => ({ whishes: state.whishes.map(whish => whish._id === id ? data.data : whish) }));
        return { success: true, message: data.message };
    }
}));