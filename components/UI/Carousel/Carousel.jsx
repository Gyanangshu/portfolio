import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import {
//     NextButton,
//     PrevButton,
//     usePrevNextButtons
// } from './CarouselArrowButtons'
import { DotButton, useDotButton } from './CarouselDotButtons'
import { LuGithub } from "react-icons/lu";
import { FcGlobe } from "react-icons/fc";
import Image from 'next/image';
import Link from 'next/link';

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

const Carousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    // const {
    //     prevBtnDisabled,
    //     nextBtnDisabled,
    //     onPrevButtonClick,
    //     onNextButtonClick
    // } = usePrevNextButtons(emblaApi)

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenOpacity = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const opacity = numberWithinRange(tweenValue, 0, 1).toString()
                emblaApi.slideNodes()[slideIndex].style.opacity = opacity
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenFactor(emblaApi)
        tweenOpacity(emblaApi)
        emblaApi
            .on('reInit', setTweenFactor)
            .on('reInit', tweenOpacity)
            .on('scroll', tweenOpacity)
            .on('slideFocus', tweenOpacity)
    }, [emblaApi, tweenOpacity])

    return (
        <div className="embla">
            {/* <div className="flex items-center gap-2 justify-end w-full pr-[3.8rem]">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div> */}
            <div className="overflow-y-visible" ref={emblaRef}>
    <div className="embla__container">
        {slides?.map((item) => (
            <div key={item.id} className='sm:max-w-[26rem] max-w-[23rem] md:mt-20 mt-6 embla__slide cursor-grab flex'>
                <div className={`border border-(--border-color) rounded-xl shadow-lg hover:shadow-purple-900 transition-all duration-700 ease-in-out flex flex-col w-full`}>
                    <div className='relative h-80 border-b border-(--border-color) overflow-hidden embla__slide__img group cursor-grab flex-shrink-0'>
                        {/* Landing page image */}
                        <Image
                            className='h-full w-full rounded-t-xl object-cover'
                            src={item.img}
                            alt={`${item.title} preview`}
                            loading='lazy'
                        />

                        {/* Dark overlay */}
                        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90 rounded-t-xl transition-opacity duration-300' />

                        {/* Logo with hover animation */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <Image
                                className='w-20 h-20 object-cover drop-shadow-2xl bg-transparent rounded-[26px]'
                                style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))' }}
                                src={item.logo}
                                alt={`${item.title} logo`}
                                loading='lazy'
                            />
                        </div>
                        {/* Tag Badge */}
                        <p className='absolute inset-0 px-4 py-0.5 mt-3 bg-gradient-to-r from-blue-950 to-purple-950 border border-l-0 border-white/50 w-fit h-fit rounded-r-lg shadow shadow-purple-950'>
                            {item.tag}
                        </p>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className='text-3xl font-semibold'>{item.title}</h3>
                        <p className='pt-4 text-gray-400 flex-grow text-lg'>{item.description}</p>
                        <div className='flex items-center gap-2 mt-8'>
                            <Link href={item.demoLink} target='_blank'>
                                <button className='flex items-center gap-2 border-2 border-white/40 px-3 pt-0.5 pb-1 rounded-2xl bg-(--color-purple) cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
                                    <FcGlobe />Demo
                                </button>
                            </Link>
                            <Link href={item.githubLink} target='_blank'>
                                <button className='flex items-center gap-2 border-2 border-white/40 px-3 py-0.5 pb-1 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
                                    <LuGithub /> Code
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

            <div className="flex items-center gap-1 justify-center mt-10">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
