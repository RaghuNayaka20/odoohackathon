export default function Breadcrumbs({items}:{items:string[]}){return <div className="eyebrow">{items.join(' / ')}</div>}
