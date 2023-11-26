import React from 'react'
import FastFoodItem from '../FastFoodItem/fastFoodItem'

const FastFoodList = ({fastFoodItems}) => {
  return (
    <div className='row' style={{marginLeft: "70px", marginRight: "70px" }}>
      {fastFoodItems.map(fastfood => {
        return (
          <div className='col-md-4 col-sm-6 mb-grid-gutter' key={fastfood.id}>
            <FastFoodItem {...fastfood} />
          </div>
        )
      })}
    </div>
  )
}

export default FastFoodList;