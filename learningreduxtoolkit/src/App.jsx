import { useState } from 'react'

import './App.css'
import AddTodo from './app/components/addTodo'
import Todos from './app/components/todos'

function App() {

  return (
    <>
    <h1>Learning redux Toolkit</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
