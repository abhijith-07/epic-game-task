import styled from "styled-components"

function Contributions() {
    return (
        <>
            <HeadSection>
                <Heading>Our Contribution</Heading>
                <Description>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</Description>
            </HeadSection>
            <Highlights>
                <Card>
                    <h6>5M</h6>
                    <p>Daily User Engagements</p>
                </Card>
                <Card>
                    <h6>$500K</h6>
                    <p>Revenue Surge for an Platform</p>
                </Card>
                <Card>
                    <h6>10X</h6>
                    <p>ROAS on all our marketing campaigns</p>
                </Card>
            </Highlights>
        </>
    )
}

const HeadSection = styled.div`
    width: 1142px;
    margin: 3rem auto;
    padding-top: 1rem;
    
    @media screen and (max-width: 1536px) {
        margin: 1rem auto;
        padding-top: 0;
        width: 80%;
    }
    
    @media screen and (max-width: 762px) {
        width: 90%;
    }
`

const Heading = styled.h2`
    font-size: 3rem;
    font-weight: 200;
    
    @media screen and (max-width: 762px) {
        font-size: 2rem;
        margin: 0.5em 0;
    }
`

const Description = styled.div`
    font-size: 1.125rem;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    
    @media screen and (max-width: 762px) {
        font-size: .75rem;
        text-align: justify;
    }
`

const Highlights = styled.div`
    display: flex;
    justify-content: center;
    padding: 4em 0;
    
    @media screen and (max-width: 1280px) {
        padding: 2em 0;
    }
    
    @media screen and (max-width: 762px) {
        display: block;
    }
`

const Card = styled.div`
    display: table;
    width: 14%;
    h6 {
        white-space: nowrap;
        font-weight: 200;
        font-size: 5rem;
        margin: 0;
    }
    p {
        font-size: 1.5rem;
        font-weight: 200;
        margin: 0;
    }

    @media screen and (max-width: 1536px) {
        width: 16%;
        margin: 1em;
    }
    
    @media screen and (max-width: 1280px) {
        width: 18%;
    }
    
    @media screen and (max-width: 762px) {
        display: block;
        width: 100%;
        margin: 0;
        h6 {
            font-size: 3rem;
        }
        p {
            font-size: 1rem;
            margin-bottom: 2rem;
        }
    }
`

export default Contributions