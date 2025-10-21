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
                    {slides?.map((item, index) => (
                        <div key={item.id} className='max-w-[26rem] md:mt-20 mt-6 embla__slide'>
                            <div className={`border border-(--border-color) rounded-xl shadow-lg hover:shadow-purple-900 transition-all duration-700 ease-in-out`}>
                                <div className='h-80 max-w-[26rem] border-b border-(--border-color) overflow-hidden embla__slide__img'>
                                    <img className='h-full w-full rounded-t-xl' src={`https://picsum.photos/600/350?v=${index}`} alt="project image" />
                                </div>
                                <div className="p-5">
                                    <h3 className='text-3xl font-semibold'>{item.title}</h3>
                                    <p className='pt-4 text-gray-500'>{item.description}</p>
                                    <div className='flex items-center gap-2 mt-8'>
                                        <button className='flex items-center gap-2 border border-(--color-border) px-3 pt-0.5 pb-1 rounded-2xl bg-(--color-purple) cursor-pointer'><FcGlobe />Demo</button>
                                        <button className='flex items-center gap-2 border border-(--color-border) px-3 py-0.5 pb-1 rounded-2xl cursor-pointer'><LuGithub /> Code</button>
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
