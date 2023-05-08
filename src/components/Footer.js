import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';

function Footer() {
  return (
    <div className='footer'>
    <div className='footer_bottom'>
    <div className="footer_bottomleft">

    <ul className='links'>
     
        <li><a href="/"><span><TwitterIcon /></span></a></li>
        <li><a href="/"><span><FacebookIcon /></span></a></li>
        
      </ul>
    
    </div>
    <div className="footer_bottomright">
   <div>  <CopyrightRoundedIcon />2023 MAKEMYTRIP PVT. LTD. </div>
   <div > Country India USA UAE</div>
   
    </div>
  </div>
  </div>
  )
}

export default Footer
