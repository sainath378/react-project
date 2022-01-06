// https://reactjs.org/docs/hooks-state.html
import { useState } from "react";
const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA"); //react restructuring
    return (

        <div className="search-params">
            <form>
                <label htmlFor="location"> Location
                    <input id="location" onChange={(e) => setLocation(e.target.value)}

                        value={location} placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>

        </div>
    );
};


export default SearchParams;