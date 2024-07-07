import styled from "styled-components"

function Home() {
    return (
        <HomeSection>
            <Heading> Epic Games : An American video game and software developer and publisher based in Cary, North Carolina. </Heading>
            <Banner> <img src="images\fortnite-pictures-b5kfcchwazwiz3cs 1.png" alt="" /> </Banner>
            <Description>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In. </Description>
            <a href="#"><WebBtn>Visit Website </WebBtn></a>
        </HomeSection>
    )
}

const HomeSection = styled.div`
    padding: 5rem 0;

    @media screen and (max-width: 1536px) {
        padding: 2rem 0;
    }
    
    @media screen and (max-width: 762px) {
        padding: 0;
    }
`

const Heading = styled.h1`
    font-weight: 200;
    font-size: 3rem;
    width: 1375px;
    margin: 0 auto;
    text-transform: capitalize;
    text-align: center;
    padding: 1rem;

    @media screen and (max-width: 1536px) {
        font-size: 2.75rem;
        width: 1200px;
    }

    @media screen and (max-width: 1280px) {
        width: 90%;
    }

    @media screen and (max-width: 962px) {
        font-size: 2.5rem;
    }
    
    @media screen and (max-width: 762px) {
        font-size: 1.5rem;
    }
`

const Banner = styled.div`
    padding: 2rem 0;
    img {
        width: 1415px;
    }

    @media screen and (max-width: 1536px) {
        padding: 1rem 0;
        img {
            width: 80%;
        }
    }
    
    @media screen and (max-width: 762px) {
        padding: 1em 0;
        img {
            width: 100%;
        }
    }
`

const Description = styled.div`
    margin: 0 auto;
    padding: 1em 0;
    width: 1230px;
    font-size: 1.125rem;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    text-align: center;
    
    @media screen and (max-width: 1536px) {
        width: 80%;
    }
    
    @media screen and (max-width: 1280px) {
        font-size: 1rem;
        width: 75%;
    }
    
    @media screen and (max-width: 762px) {
        width: 100%;
        font-size: 0.75rem;
    }
`

const WebBtn = styled.button`
    width: 416px;
    height: 60px;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    padding: 0;
    border: none;
    margin: 2em 0;
    background-color: #fff;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #000;
        border: 1px solid #fff;
    }

    @media screen and (max-width: 1536px) {
        margin: 1em 0;
    }
    
    @media screen and (max-width: 762px) {
        width: 90%;
    }
    
    @media screen and (max-width: 762px) {
        font-size: 0.75rem;
        width: 50%;
        height: 3rem;
    }
`

export default Home