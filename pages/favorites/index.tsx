import { Layout } from "../../components/layouts"
import { NextPage } from 'next';
import { NoFavorites } from "../../components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';

const FavoritesPage:NextPage = () => {
    
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        setFavorites(localFavorites.pokemons);
    }, []);

    return (
        <Layout title="Pokemon - Favorites">
            {
                favorites.length === 0
                ? (<NoFavorites />)
                : (<FavoritePokemons ids={favorites}/>)
            }
        </Layout>
    )
}

export default FavoritesPage