import styled from "styled-components"

function Contributions() {
    return (
        <>
            <Heading>Our Contribution</Heading>
            <Description>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</Description>
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

const Heading = styled.h2``

const Description = styled.div``

const Highlights = styled.div`
    display: flex;
`

const Card = styled.div``

export default Contributions