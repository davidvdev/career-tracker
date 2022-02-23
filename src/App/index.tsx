import { useState } from 'react'
import './style.css'

// import other components
import Banner from '../components/Banner/index'
import DataSummary from '../components/DataSummary/index'
import Form from '../components/Form/index'
import Table from '../components/Table/index'

function App() {
  return (
    <div className="App">
        <Banner />
      <section>
        <DataSummary />
      </section>
      <section>
        <Table />
        <Form />
      </section>
    </div>
  )
}

export default App
