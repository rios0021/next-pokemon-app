import { Grid } from "@nextui-org/react"
import { FavoritePokemonCard } from "./FavoritePokemonCard"

type Props = {
    ids: number[];
}

export const FavoritePokemons = ({ids}:Props) => {
    console.log(ids)
    return (
        <Grid.Container gap={2} justify='flex-start'>
        {
            ids.map((id) => (
                <FavoritePokemonCard key={id} id={id}/>
            ))
            
        }
        
        </Grid.Container>
    )
}