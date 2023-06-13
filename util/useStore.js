import { create } from "zustand";

export const useStore = create((set) => ({
	// user data
	user: null,
	setUser: (user) => set((prev) => ({ user })),
	collectionID: null,
	setCollectionID: (collectionID) => set((prev) => ({ collectionID })),

	// loading state
	loading: false,
	setLoading: (state) => set((prev) => ({ loading: state })),

	// collection data
	collection: [],
	addItem: (item) => set((prev) => ({ collection: [...prev.collection, item] })),
	updateCollection: (collection) => set((prev) => ({ collection })),
}));
