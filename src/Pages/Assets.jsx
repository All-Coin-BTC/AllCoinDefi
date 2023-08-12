import React from 'react'
import StakeCard from '../Components/StakeCard'
import { dummyAssets } from '../data/dummyData'
const {id, img, name, desc, apr, amtStaked, learnMoreInfo} = dummyAssets[0];
export default function Assets() {
  return (
    <div className='assets-page-container'>
      <div className="assets-title text-gray-400 text-center">Assets</div>
      <StakeCard id = {id} img = {img} name ={name} desc = {desc} apr = {apr} amtStaked = {amtStaked} learnMoreInfo = {learnMoreInfo}/>
    </div>
  )
}
