import React from 'react'

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
<p>Copyright ©2004-{currentYear} ADComp</p>
<p>{currentYear - 2004} Лет с вами</p>
    </div>
  )
}

export default Footer