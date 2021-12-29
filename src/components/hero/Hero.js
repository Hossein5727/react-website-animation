import React, { useEffect, useRef, useState } from 'react'
import { HeroElemetsData } from '../../data/HeroElemetsData'
import { Button } from '../Button'
import { HeroContent, HeroImage, HeroSlides, HeroWrapper, NextSlide, PrevSlide, Section } from './HeroElemets'
import { FcNext } from 'react-icons/fc'

function Hero() {

    const [current, setCurrent] = useState(1)
    const slideRef = useRef()
    const slideLength = HeroElemetsData.length

    const nextSlide = () => {
        if (slideRef.current) {
            clearTimeout(slideRef.current)
        }

        if (current < slideLength) {
            setCurrent(current + 1)
        }
        else if (current === slideLength) {
            setCurrent(1)
        }
    }

    const prevSlide = () => {
        if (slideRef.current) {
            clearTimeout(slideRef.current)
        }

        if (current >= 2) {
            setCurrent(current - 1)
        }
        else if (current <= 1) {
            setCurrent(5)
        }
    }

    useEffect(() => {
        console.log(current);
        const next = () => {
            if (current < slideLength) {
                setCurrent(current + 1)
            }
            else if (current === slideLength) {
                setCurrent(1)
            }
        }
        slideRef.current = setTimeout(next, 4000)
        return function () {
            if (slideRef.current) {
                clearTimeout(slideRef.current)
            }
        }
    }, [current, slideLength, slideRef])

    return (
        <Section>
            <HeroWrapper>
                {HeroElemetsData.map(item => (
                    <div>
                        {item.id == current && (
                            <HeroSlides ref={slideRef} key={item.id} className='animate__animated animate__fadeIn'>
                                <HeroImage src={item.img} />
                                <HeroContent className='animate__animated animate__fadeInLeftBig animate__delay-1s lg:mr-64 mt-28  sm:m-0'>
                                    <h1>{item.title}</h1>
                                    <p>{item.price}$</p>
                                    <Button primary to="/">View Home <FcNext className='ml-3' /></Button>
                                </HeroContent>
                            </HeroSlides>
                        )}
                    </div>
                ))}
                <NextSlide onClick={nextSlide} />
                <PrevSlide onClick={prevSlide} />
            </HeroWrapper>
        </Section>
    )
}

export default Hero
