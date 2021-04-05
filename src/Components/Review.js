import React, { useState } from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import data from "../data";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Heading = styled.h1`
    margin: 3rem auto;
    color: #102a42;
`;

const Card = styled.div`
    margin: 2rem auto;
    box-shadow: 2px 2px 6px 2px gray;
    padding: 3rem;
    max-width: 600px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #102a42;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const Img = styled.img`
    object-fit: cover;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    box-shadow: 8px -8px #49a6e9;
`;

const Quote = styled(IoIosQuote)`
    font-size: 2rem;
    position: absolute;
    left: 10%;
    background-color: #49a6e9;
    border-radius: 50%;
    color: white;
`;

const Name = styled.h3`
    margin: 10px 0;
    font-size: 1.6rem;
`;

const Job = styled.h5`
    margin-bottom: 10px;
    font-size: 1.3rem;
    color: #49a6e9;
`;

const Text = styled.p`
    text-align: center;
`;

const Icons = styled.div`
    margin: 10px 0;
    color: #49a6e9;
    font-size: 1.5rem;
`;

const RightIcon = styled(AiOutlineRight)`
    margin-left: 10px;
    cursor: pointer;
`;

const LeftIcon = styled(AiOutlineLeft)`
    margin-right: 10px;
    cursor: pointer;
`;

const Btn = styled.button`
    border: none;
    padding: 3px 5px;
    font-size: 1.1rem;
    color: #49a6e9;
    cursor: pointer;
    outline: none;
`;

const Review = () => {
    const [index, setIndex] = useState(0);

    const prevIndex = () => {
        index === 0 ? setIndex(3) : setIndex(index - 1);
    };

    const nextIndex = () => {
        index === 3 ? setIndex(0) : setIndex(index + 1);
    };

    const randomIndex = () => {
        const randomNum = Math.floor(Math.random() * data.length);
        index === randomNum && index === 3
            ? setIndex(index - 1)
            : setIndex(randomNum);
        index === randomNum && index === 0
            ? setIndex(index + 1)
            : setIndex(randomNum);
    };

    const { id, name, job, image, text } = data[index];
    return (
        <>
            <Container key={id}>
                <Heading>Our Review</Heading>
                <Card>
                    <ImageContainer>
                        <Quote />
                        <Img src={image} alt={name} />
                    </ImageContainer>
                    <Name>{name}</Name>
                    <Job>{job}</Job>
                    <Text>{text}</Text>
                    <Icons>
                        <LeftIcon onClick={prevIndex} />
                        <RightIcon onClick={nextIndex} />
                    </Icons>
                    <Btn onClick={randomIndex}>Surprise Me</Btn>
                </Card>
            </Container>
        </>
    );
};

export default Review;
