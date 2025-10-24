import React from 'react'

const Button = ({ bgColor, text, icon, disabled }) => {
    return (
        <button
            type='submit'
            disabled={disabled}
            style={{ backgroundColor: bgColor }}
            className={`${bgColor} group px-6 py-2 text-white text-lg rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center flex-nowrap gap-2 sm:w-max w-full disabled:opacity-60 disabled:cursor-not-allowed`}
        >
            {text}
            {icon && <span className="transition-transform group-hover:translate-x-0.5 ">
                {icon}
            </span>
            }
        </button>

    )
}

export default Button
