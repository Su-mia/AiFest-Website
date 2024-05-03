import React from 'react'
import WhatIsAiFest from './info/WhatIsAiFest'
import WhoIsGdscEnsia from './info/WhoIsGdscEnsia'

function InfoSection() {
  return (
    <div 
    id='About'
    className="w-full info-bg"
    >
       <WhatIsAiFest/>
       <WhoIsGdscEnsia/>
    </div>
  )
}

export default InfoSection
