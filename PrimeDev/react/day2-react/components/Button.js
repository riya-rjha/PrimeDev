export const Button = ({children, color}) => {
    return <button className={color}>{children}</button>
}

// not default so use curly braces while importing