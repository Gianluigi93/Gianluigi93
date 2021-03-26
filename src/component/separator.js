import React, { Component } from 'react'

class Separator extends Component{
    render() {
        return (
            <div class="sezione" data-color="blue-darker">
                <div class="inner-section">
                    <h3>Vuoi conoscere <span>le tecnologia</span> con cui lavoro?
                        <span><a href="#skills" class="si">Si</a>/<a href="#quattro" class="no">No</a></span>
                    </h3>
                    </div>
            </div>
        )
}
}

export default Separator;