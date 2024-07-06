import styled from "styled-components"

function Projects() {
    return (
        <ProjectDiv>
            <Card>
                <img src="src\assets\images\img1.png" alt="" />
                <p>Explore large, destructible environments where no two games are ever the same.</p>
            </Card>
            <Card>
                <img src="src\assets\images\img2.png" alt="" />
                <p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
            </Card>
            <Card>
                <img src="src\assets\images\img3.png" alt="" />
                <p>Discover even more ways to play across thousands of creator-made game genres</p>
            </Card>
        </ProjectDiv>
    )
}

const ProjectDiv = styled.div`
    display: flex;
`

const Card = styled.div``

export default Projects