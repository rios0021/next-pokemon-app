import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router";

type Props = {
    id: number;
}
export const FavoritePokemonCard = ({id}:Props) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/pokemon/${id}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} key={id}>
            <Card isHoverable isPressable onPress={onClick} css={{padding:10}}>
                <Card.Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={140}
                />

            </Card>
        </Grid>
    )
}