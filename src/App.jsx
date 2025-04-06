import { Suspense } from 'react'
import './App.css';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends'

// First method to fatch the api
const users = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

// Second method to fatch the api
const friends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

function App() {
  const callFriends = friends()
  return (
    <>
      <h1>Core Concept of react</h1>
      <p>By Muksitul Islam Jahin</p>
      <Counter></Counter>

      {/* // First method to fatch the api */}
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Users users={users}></Users>
      </Suspense>

      {/* // Second method to fatch the api*/}
      <Suspense fallback={<h2>Friends are coming....</h2>}>
        <Friends callFriends={callFriends}></Friends>
      </Suspense>
    </>
  )
}

export default App
