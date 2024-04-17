import { ButtonHTMLAttributes} from "react"
import styles from './Button.module.css'
import { ButtonVariant } from "./Button.constants"

interface IButton extends ButtonHTMLAttributes <HTMLButtonElement>{
    variant?: string
}

export function Button({variant = ButtonVariant.Default, children,...rest}: IButton){
    let buttonClass = styles.buttonBase
    switch(variant){
        case ButtonVariant.Default:
            buttonClass += ` ${styles.buttonDefault}`
            break
        case ButtonVariant.Outlined:
            buttonClass += ` ${styles.buttonOutline}`
            break
        case ButtonVariant.Text:
            buttonClass += ` ${styles.buttonText}`
            break


    }

    return <button className={buttonClass}{...rest}>{children}</button>
}