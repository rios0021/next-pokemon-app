import { SmallPokemon } from "../../interfaces"
import { Card,  Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
interface Props {
    pokemon: SmallPokemon;

}
export const PokemonCard = ({pokemon}:Props) => {
    const {id, img, name} = pokemon
    const router = useRouter();
    const onClick = () => {
        router.push(`/name/${name}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card 
                isHoverable 
                isPressable 
                css={{p:1}}
                onPress={onClick}
            >
                <Card.Body>

                <Card.Image
                    src={img}
                    width="100%"
                    height={140}
                    alt={`${name} image`}
                />
                </Card.Body>
                <Card.Footer >
                    <Row justify='space-between'>
                    <Text h4  weight="bold" transform="capitalize">
                        {name}
                    </Text>
                    <Text weight="bold" transform="uppercase" >
                        {id}
                    </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}