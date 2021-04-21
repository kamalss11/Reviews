import React,{ useState } from 'react'
import people from './data'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'

function Review(){
    const [index,setIndex] = useState(0)
    const {name,job,image,text} = people[index]

    function checkNumber(number){
        if(number > people.length-1){
            return 0
        }

        else if(number < 0){
            return people.length-1
        }

        return number
    }

    function nextPerson(){
        setIndex((index)=>{
            let newIndex =  index + 1
            return checkNumber(newIndex)
        })
    }

    function prevPerson(){
        setIndex((index)=>{
            let newIndex =  index - 1
            return checkNumber(newIndex)
        })
    }

    function randomPerson(){
        let random = Math.floor(Math.random() * people.length)
        if(random === index){
            random = index + 1
        }
        setIndex(checkNumber(random))
        console.log(random)
    }
    return(
        <div className="reviews">
            <img src={image} alt={image} title={name}/>
            <h3>{name} ({job})</h3>
            <p>{text}</p>
            <div className="btns">
                <button onClick={prevPerson}><BiChevronLeft /></button>
                <button onClick={nextPerson}><BiChevronRight /></button>
            </div>
            <button className="randm-btn" onClick={randomPerson}>Surprise me</button>
        </div>
    )
}

export default Review
