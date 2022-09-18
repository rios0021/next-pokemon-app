import React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import PokemonPage from '../pokemon/[id]';
import { getPokemonInfo } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage : NextPage<Props> = ({pokemon}) => {
    return (
        <PokemonPage pokemon={pokemon}/>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const names : string [] = data.results.map( pokemon => (pokemon.name))
    return {
        paths: names.map(name => ({
            params: {name}
        })),
        fallback: 'blocking'
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {name} = params as {name:string};
    const pokemon =  await getPokemonInfo(name);

    if(!pokemon){
        return{
            redirect:{
                destination:'/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        }
    }
}


export default PokemonByNamePage
