
const toggleFavorite = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    favorites.includes(id) 
    ? favorites = favorites.filter(pokeId => pokeId !== id)
    : favorites.push(id)
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const isFavorite = (id: number): boolean => {
    try {
        let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
        return favorites.includes(id);
        
    } catch (error) {
        return false
    }
}
const pokemons = () : number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}
export default{
    toggleFavorite,
    isFavorite,
    pokemons
}