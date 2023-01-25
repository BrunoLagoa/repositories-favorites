import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteRepositoriesStore = {
  favoriteRepoIds: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

const useFavoriteRepositoriesStore = create(
  persist<FavoriteRepositoriesStore>(
    (set) => ({
      favoriteRepoIds: [],
      addToFavorites: (repoId: number) => {
        set((state) => ({
          favoriteRepoIds: [...state.favoriteRepoIds, repoId],
        }));
      },

      removeFromFavorites: (repoId: number) => {
        set((state) => ({
          favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId),
        }));
      },
    }),
    {
      name: 'favorite-repositories',
    }
  )
);

export default useFavoriteRepositoriesStore;
