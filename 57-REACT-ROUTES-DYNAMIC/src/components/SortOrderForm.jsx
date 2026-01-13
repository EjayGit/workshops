import {useSearchParams} from 'react-router'

export default function SortOrderForm(){
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e) => {
        setSearchParams({ sort: e.target.value });
    };
    return (
        <form>
            <label>
                Sort by:
                <select value={searchParams.get('sort') || ""} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </label>
        </form>
    );
}