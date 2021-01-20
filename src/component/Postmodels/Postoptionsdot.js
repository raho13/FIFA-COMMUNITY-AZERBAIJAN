import React, { useState } from 'react'
import { ReactComponent as Dots } from "../../icons/Dots.svg";

export default function Postoptionsdot() {
    const [active, setactive] = useState(false)
    const vis = (i) => {
        if (i == 1) {
            if (active) {
                return 'simple-dropdown widget-box-post-settings-dropdown actdodsset'
            }
            else {
                return "simple-dropdown widget-box-post-settings-dropdown pssdodsset"
            }
        }
        else {
            if (active) {
                return 'pstdotsAct'
            }
            else {
                return "pstdots"
            }
        }

    }
    return (
        <div className="widget-box-settings">
            <div className="post-settings-wrap" >
                <Dots onClick={() => {
                    setactive(!active)
                }} className={vis(2)} />
                <div className={vis(1)}>
                    <p className="simple-dropdown-link">Edit Post</p>
                    <p className="simple-dropdown-link">Delete Post</p>
                    <p className="simple-dropdown-link">Make it Featured</p>
                    <p className="simple-dropdown-link">Report Post</p>
                    <p className="simple-dropdown-link">Report Author</p>
                </div>
            </div>
        </div>

    )
}
