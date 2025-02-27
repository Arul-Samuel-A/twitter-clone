import React from 'react'
import { LeftNav } from './LeftNav'
import {FeedTab} from './FeedTab'
import {TrendingColumn} from './TrendingColumn'

function App(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 col-12 p-0'>
          <LeftNav/>
        </div>
        <div className='col-md-6 col-12 p-0'>
          <FeedTab/>
        </div>
        <div className='col-md-3 col-12  p-0'>
          <TrendingColumn/>
        </div>
      </div>
    </div>
    
  )
}


export default App