import React from 'react'
import Data from '../api/footerApi.json';
import{IoCallSharp} from "react-icons/io5";
import{MdPlace} from "react-icons/md";
import{TbMailPlus} from "react-icons/tb";
const Footers = () => {
    const footerIcon={
        MdPlace:<MdPlace />,
        IoCallSharp:<IoCallSharp />,
        TbMailPlus:<TbMailPlus />
    }
  return (
    <footer className='footer-section'>
        <div className="container grid grid-three-cols">
            {
               Data.map((curr,idx)=>{
                const{icon,details,title}=curr;
                return(
                    <div className="footer-contact" key={idx}>
                        <div className="icon">{footerIcon[icon]}</div>
                        <div className="footer-contact-text">
                            <p>{title}</p>
                            <p>{details}</p>
                        </div>
                    </div>
                )
               })
            }
        </div>
    </footer>
  )
}

export default Footers;