import React from 'react';

import { Cards, Chart, CountryPicker } from './components'
// To make this work we simply have to include a index.js file into the components directory
import styles from './App.module.css'
import { fetchData } from './api'
class App extends React.Component {
    state = {
        data: {},
        country:'',
    }
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }

handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    // console.log(fetchedData)
    // console.log(country)
    this.setState({ data: fetchedData, country: country })

}

    render() {
        const { data } = this.state
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart />
            </div>
        );
    }
}

export default App;
