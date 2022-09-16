import { FC,  ReactNode } from "react"

import Head from "next/head"
import { Link, Navbar, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from 'next/router';


interface LayoutProps {
    title?: string;
    children?: ReactNode;

}

export const Layout:FC<LayoutProps> = ({ title, children}) => {

    const router  = useRouter();
    const origin = (typeof window === 'undefined') ? '' : window.location.origin;
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Eduardo Rios"/>
                <meta name="description" content={`Info about pokemon ${title}`}/>
                <meta name="keywords" content={`{$title}, pokemon, pokedex`}/>

                <meta property="og:title" content={`Info about ${title}`} />
                <meta property="og:description" content={`This is the page about ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar isBordered variant={'floating'}>
                <Navbar.Brand>
                    <NextLink href={'/'} passHref>
                        <Link >
                                    <Image 
                                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
                                        alt="App Icon"
                                        width={70}
                                        height={70}
                                    />
                                    <Text css={{
                                        textGradient: "45deg, $blue600 -20%, $pink500 50%",
                                        }} h2>
                                        P
                                    </Text>
                                    <Text css={{
                                        textGradient: "45deg, $blue600 -20%, $pink500 50%",
                                        }} h3>
                                        okemon App
                                    </Text>
                        </Link>
                    </NextLink>
                </Navbar.Brand>
                <Navbar.Content activeColor={"secondary"} hideIn="xs" enableCursorHighlight variant={"highlight-rounded"} >
                    <Spacer css={{flex: 1}}/>
                    <NextLink href="/favorites" passHref>
                        <Navbar.Link isActive={router.route.includes('favorites')} >Favorites</Navbar.Link>
                    </NextLink>
                </Navbar.Content>
            </Navbar>
            <main>
                {children}
            </main>

        </>
    )
}