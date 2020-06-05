import React, { Component } from 'react'; 
import Slider from "react-slick";
import image from '../../assets/img/zotac.jpg';
import image2 from '../../assets/img/Ibuypower-pro-prebuilt.jpg';
import image3 from '../../assets/img/dell.jpg';
import image4 from '../../assets/img/l.jpg';
import image5 from '../../assets/img/asus-ga35-desktop-pc-render.jpg';
import  "./coursel.css"


const photos = [{
    name: 'photo 1',
    src: image
},
{
    name: 'photo 2',
    src: image2
},
{
    name: 'photo 3',
    src: image3
},
{
    name: 'photo 4',
    src: image4
}
,
{
    name: 'photo 5',
    src: image5
}

]


class Coursel extends Component{
    render() {
        const settings = {
            fade: true,
            infinite: true,
            speed: 500,
            arrow: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className:'slides'
          };
          return (
                <div className="App">
                    <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div key={photo.name}>
                                <img width="100%" src={photo.src} alt="corsel-images"/>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
          );
        }
      }




export default Coursel;