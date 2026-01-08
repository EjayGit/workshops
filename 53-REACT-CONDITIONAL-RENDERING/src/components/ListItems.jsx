export default function ListItems(){
    const items = [];

    return (
        <>
        <ul>
            {items.length && items.map(item => <li key={item}>{item}</li>)}
        </ul>
        <ul>
            {
            items.length > 0
            ?
            (items.map(item => <li key={item}>{item}</li>))
            :
            (<li>No items</li>)
            }
        </ul>
        </>
    )
}

