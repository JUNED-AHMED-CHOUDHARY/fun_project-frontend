import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, [])

    console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <div>
        qeg
    </div>
  )
}

export default Home
