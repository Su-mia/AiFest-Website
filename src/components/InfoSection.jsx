import React from 'react'
import WhatIsAiFest from './info/WhatIsAiFest'
import WhoIsGdscEnsia from './info/WhoIsGdscEnsia'
import Speakers from './info/Speakers'
import Agenda from './info/Agenda'

function InfoSection() {
  return (
    <div>
       <WhatIsAiFest/>
       <WhoIsGdscEnsia/>
       <Speakers/>
       <Agenda/>
    </div>
  )
}

export default InfoSection
