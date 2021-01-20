import React from "react"
import adiwiyata from "../gambar/adiwiyata.jpg"

class Beranda extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                <h2 align="center">ADIWIYATA</h2>
                <p align="center">Adiwiyata, secara internasional disebut pula dengan Green School adalah salah satu program 
                Kementerian Lingkungan Hidup dalam rangka mendorong terciptanya pengetahuan dan kesadaran warga sekolah dalam upaya pelestarian lingkungan hidup. 
                Diharapkan setiap warga sekolah ikut terlibat dalam kegiatan sekolah menuju lingkungan yang sehat dan menghindari dampak lingkungan yang negatif.

                Green School merupakan program yang dikembangkan di tingkat internasional. Green School lebih bermakna pada pembentukkan sikap anak didik dan warga sekolah terhadap lingkungan, 
                yang tercermin dalam kehidupan sehari-hari di sekolah. Hal ini diwujudkan dalam sikap dan perilaku sehari-hari, baik di sekolah, rumah atau di lingkungan tempat tinggalnya. 
                Termasuk di dalamnya program “Greening The Curriculum”, kurikulum hijau, artinya kurikulum yang memperhatikan aspek-aspek lingkungan dalam bahasannya serta mengintegrasikan 
                materi lingkungan ke dalam pembelajarannya, sesuai dengan topik bahasannya.

                Kata ADIWIYATA berasal dari 2 kata Sansekerta “Adi” dan “Wiyata”. Adi mempunyai makna : besar, agung, baik, ideal atau sempurna, Wiyata mempunyai makna tempat dimana 
                seseorang mendapatkan ilmu pengetahuan, norma dan etika dalam berkehidupan sosial. Adiwiyata dapat diartikan sebagai tempat yang baik dan ideal dimana dapat diperoleh 
                segala ilmu pengetahuan dan berbagai etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup kita dan menuju kepada cita-cita pembangunan berkelanjutan .
                </p>
                <img className="img-fluid" src={adiwiyata}></img>
            </div>
        )
    }
}

export default Beranda;