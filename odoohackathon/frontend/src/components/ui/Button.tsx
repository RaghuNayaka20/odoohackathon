export default function Button({children,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>){return <button className="button button-primary" {...props}>{children}</button>}
