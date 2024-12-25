import { create } from 'zustand';

export const useWhishStore = create ((set) => ({
    whishes: [],
    setWhishes: (whishes) => set( {whishes} ),
    createWhish: async(newWhish) => {

        if(!newWhish.type || !newWhish.brand || !newWhish.model) {
            return { success: false, message: "Please provide all fields."};
        }

        const response = await fetch(`api/vehicle`, {
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
        const response = await fetch(`api/vehicles`);
        const data = await response.json();
        set({ whishes: data.data});
    }
}));