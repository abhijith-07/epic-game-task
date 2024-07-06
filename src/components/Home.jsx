import styled from "styled-components"

function Home() {
    return (
        <>
            <Heading> Epic Games : An American video game and software developer and publisher based in Cary, North Carolina. </Heading>
            <Banner> <img src="src\assets\images\fortnite-pictures-b5kfcchwazwiz3cs 1.png" alt="" /> </Banner>
            <Description> Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In. </Description>
            <WebBtn> Visit Website </WebBtn>
        </>
    )
}

const Heading = styled.h1`
    font-weight: 100;
`

const Banner = styled.div``

const Description = styled.div``

const WebBtn = styled.button``

export default Home