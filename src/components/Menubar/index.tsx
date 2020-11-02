import React from 'react'
import {items} from '../../constants/MainMenu'
import {Menubar} from 'primereact/menubar'

function Sidebar() {
    return (
        <div>
            <div className="card">
                <Menubar 
                model={items}
                 />
            </div>
        </div>
    )
}

export default Sidebar
