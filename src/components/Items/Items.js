import React from 'react'
import Button from '../Button/Button'
import {MdKeyboardArrowDown} from 'react-icons/md'
import './Items-styles.css'

function Items({title, desc, backgroundImg, first}) {
  return (
    <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
    }}>
        <div className='item-container'>
            <div className='item-text'>
                <h2>{title}</h2>
                <div className='item-textDesc'>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='item-lowerThird'>
                <div className='item-buttons'>
                  <Button/>
                </div>
                {first &&(
                    <div className='item_expand'>
                            <MdKeyboardArrowDown/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Items