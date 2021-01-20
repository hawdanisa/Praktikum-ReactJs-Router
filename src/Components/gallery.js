import React from "react"
import sekolah1 from "../gambar/sekolah1.jpg"
import sekolah2 from "../gambar/sekolah2.jpg"
import sekolah3 from "../gambar/sekolah3.jpg"
import sekolah4 from "../gambar/sekolah4.jpg"
import sekolah5 from "../gambar/sekolah5.jpg"
import sekolah6 from "../gambar/sekolah6.jpg"

import './style.css'

class Gallery extends React.Component{
    render(){
        return(
            <div align="center">
                <br></br>
                <h2>GALLERY CONTOH PENERAPAN ADIWIYATA DI SEKOLAH</h2>
                <br></br>
                <img className="gambar" src={sekolah1}></img>
                <img className="gambar" src={sekolah2}></img>
                <img className="gambar" src={sekolah3}></img>
                <img className="gambar" src={sekolah4}></img>
                <img className="gambar" src={sekolah5}></img>
                <img className="gambar" src={sekolah6}></img>
            </div>
        )
    }
}

export default Gallery;