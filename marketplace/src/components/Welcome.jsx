import React from 'react'
import "./welcome.css"
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Home from '../components/Home'



export default function Welcome() {
  return (
    <div className='d-flex'>
    <img src="https://i.ibb.co/z6MFmWw/Special-Needs-Dog-hyper-realistic-8k-3d-store-front-entrance-to-2b5d29e8-3a7c-4c87-a3aa-c14bbc7512ef.png" alt='shop' className='shop'></img>
    {/* <img src="https://ibb.co/m6L1Q3R" alt='shop'></img> */}
    <div className='welcomemsg d-flex-column'>
           - CAUTION -
    <div id='msg'>ENTER AT OWN RISK</div>
    <Link to='/Home'>
  <ArrowRight />
</Link>
    </div>
    </div>
  )
}

