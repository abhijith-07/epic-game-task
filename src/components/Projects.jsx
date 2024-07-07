import styled from "styled-components"

function Projects() {
    return (
        <ProjectDiv>
            <Card>
                <img src="images\img1.png" alt="" />
                <p>Explore large, destructible environments where no two games are ever the same.</p>
            </Card>
            <Card>
                <img src="images\img2.png" alt="" />
                <p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
            </Card>
            <Card>
                <img src="images\img3.png" alt="" />
                <p>Discover even more ways to play across thousands of creator-made game genres</p>
            </Card>
        </ProjectDiv>
    )
}

const ProjectDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 3em 0;
    
    @media screen and (max-width: 1280px) {
        padding: 1em 0;
    }
    
    @media screen and (max-width: 762px) {
        display: block;
        padding: 2em 0;
    }
`

const Card = styled.div`
    width: 347px;
    margin: 2em;
    img {
        height: 347px;
        padding-bottom: 1em;
    }
    p {
        font-size: 1.25rem;
        font-weight: 300;
        text-transform: capitalize;
    }
    
    @media screen and (max-width: 1280px) {
        width: 250px;
        margin: 1em 2em;
        img {
            height: 250px;
        }
        p {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 962px) {
        width: 200px;
        margin: 2em;
        img {
            height: 200px;
        }
        p {
            font-size: 1rem;
        }
    }
    
    @media screen and (max-width: 762px) {
        display: flex;
        margin: 1em 0;
        width: 100%;
        img {
            height: 50vw;
        }
        p{
            font-size: 0.85rem;
            display: flex;
            align-items: center;
        }
    }
`

export default Projects