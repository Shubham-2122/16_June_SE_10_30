import React from 'react'
import ClassProps from './ClassProps'

function MainProps() {
    return (
        <div>

            {/* This Class Props Compoennt */}
            <div className="container">
                <h1 className='bg-info'>Hello this CLASS Props Component</h1>
                <div className="row">
                    <ClassProps title="car 1" desc="car natutaly data" img="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" />
                    <ClassProps title="car 2" desc="car natutaly sdfds" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                     <ClassProps title="car 1" desc="car natutaly data" img="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" />
                    <ClassProps title="car 2" desc="car natutaly sdfds" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                     <ClassProps title="car 1" desc="car natutaly data" img="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" />
                    <ClassProps title="car 2" desc="car natutaly sdfds" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                </div>
            </div>
        </div>
    )
}

export default MainProps