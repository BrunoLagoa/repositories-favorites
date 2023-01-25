import { Repo } from '../../queries/repo/types';
import './styles.css';

type CardProps = {
  repo: Repo;
  isFavorite: boolean;
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

export default function Card({
  repo,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}: CardProps) {
  function handleToggleFavorite() {
    if (isFavorite) {
      return removeFromFavorites(repo.id);
    }
    return addToFavorites(repo.id);
  }

  return (
    <div className='card'>
      <h2>{repo.name}</h2>

      <div className='card-buttons'>
        <button onClick={handleToggleFavorite}>
          {!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
        </button>
      </div>
    </div>
  );
}
