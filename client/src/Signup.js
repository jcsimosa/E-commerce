import React from "react";

function Signup() {
    return(
        <div>
            <form>
                <div>
                    <input required="name" placeholder="name"></input>
                </div>
                <div>
                    <input required="email" placeholder="email"></input>
                </div>
                <div>
                    <input required="password" placeholder="password"></input>
                </div>
                <div>
                    <input required="address" placeholder="address"></input>
                </div>
                <input type="submit" value='Submit'></input>
            </form>
        </div>
    )
}
export default Signup