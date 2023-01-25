import { useCallback } from 'react';
import './App.css';
import Card from './components/Card';
import useFetchRepositories from './queries/repo';
import useFavoriteRepositoriesStore from './store/useFavoriteRepositories';

function App() {
  const { data } = useFetchRepositories('brunolagoa');

  const favoriteRepoIds = useFavoriteRepositoriesStore(
    (state) => state.favoriteRepoIds
  );
  const addToFavorites = useFavoriteRepositoriesStore(
    (state) => state.addToFavorites
  );
  const removeFromFavorites = useFavoriteRepositoriesStore(
    (state) => state.removeFromFavorites
  );

  const handleAddToFavorites = useCallback((repoId: number) => {
    addToFavorites(repoId);
  }, []);

  const handleRemoveFromFavorites = useCallback((repoId: number) => {
    removeFromFavorites(repoId);
  }, []);

  return (
    <div className='App'>
      {data?.map((repo) => (
        <Card
          key={repo.id}
          repo={repo}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
          isFavorite={favoriteRepoIds.includes(repo.id)}
        />
      ))}
    </div>
  );
}

export default App;
