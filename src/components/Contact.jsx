import styled from "styled-components"

function Contact() {
    return (
        <ContactSection>
            <Heading>Interested in delving deeper into the project?</Heading>
            <Description>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span>hello@abc.com</span> or give us a call at <span> +91 480 20802730</span>.</Description>
            <ButtonSection>
                <a href="#" className="skype">Ring us on Skype</a>
                <a href="#" className="contact">Contact Us</a>
            </ButtonSection>
        </ContactSection>
    )
}

const ContactSection = styled.div`
    margin: 10em 0;

    @media screen and (max-width: 1536px) {
        margin: 6em 0;
    }
    
    @media screen and (max-width: 1280px) {
        margin: 4em 0;
    }
    
    @media screen and (max-width: 762px) {
        margin: 0;
    }
`

const Heading = styled.h2`
    font-size: 3rem;
    font-weight: 200;
    text-transform: capitalize;

    @media screen and (max-width: 1280px) {
        font-size: 2.5rem;
    }
    
    @media screen and (max-width: 762px) {
        font-size: 1.5rem;
    }
`

const Description = styled.p`
    font-size: 1.75rem;
    font-weight: 200;
    text-align: center;
    width: 864px;
    margin: 0 auto;

    span {
        font-weight: 500;
    }

    @media screen and (max-width: 1280px) {
        width: 80%;
        font-size: 1.5rem;
    }
    
    @media screen and (max-width: 762px) {
        font-size: 1rem;
        width: 90%;
        text-align: justify;
        span {
            font-weight: 300;
        }
    }
`

const ButtonSection = styled.div`
    margin: 2rem auto;
    a { 
        padding: 1em 7em;
        display: inline-block;
        text-align: center;
        font-size: 1.125rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        text-decoration: none;
        margin: 1em;
    }
    a.skype {
        color: #fff;
        border: 1px solid #fff;
    }

    a.contact {
        color: #000;
        background-color: #fff;
    }
    
    @media screen and (max-width: 1280px) {
        a {
            font-size: 1rem;
            padding: 1em 5em;
        }
    }
    
    @media screen and (max-width: 762px) {
        a {
            padding: 0;
            margin: 0.5em 0;
            width: 80%;
        }
    }
`

export default Contact