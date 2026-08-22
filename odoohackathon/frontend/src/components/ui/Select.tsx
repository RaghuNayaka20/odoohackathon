export default function Select({children,...props}:React.SelectHTMLAttributes<HTMLSelectElement>){return <select className="field" {...props}>{children}</select>}
