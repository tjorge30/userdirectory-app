import React from 'react'

const IndexCard = (props) => {
    const { data, index } = props

        return (
            <div className="card">
                <div className='count'>
                <h1>{data[index].id + '/' + '25'}</h1>
                </div>
                <div className="personInfo">
                    <h1 className='name'>{data[index].name.first + ' ' + data[index].name.last}</h1>
                    <h3>From: {data[index].city + ', ' + data[index].country}</h3>
                    <h3>Job Title: {data[index].title}</h3>
                    <h3>Employeer: {data[index].employer}</h3>
                </div>
                <div className='moviesSection'>
                <h2>Favorite Movies:</h2>
                <ol>{data[index].favoriteMovies.map(elem => <li>{elem}</li>)}</ol>
                </div>
            </div>
        )
    
}

export default IndexCard