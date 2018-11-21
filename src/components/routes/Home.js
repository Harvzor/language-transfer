import React, { Component } from 'react'
import CourseList from '../CourseList'
import api from '../../api'

class Home extends Component {
    state = {
        settingsVisible: false,
        playlists: {
            collection: []
        }
    }
    componentDidMount = () => {
        api.getPlaylists()
            .then(playlists => {
                this.setState(() => ({
                    playlists: playlists
                }))
            })
    }
    render() {
        return (
            <section className="list">
                <p>Select a course you want to start.</p>
                <CourseList playlists={this.state.playlists.collection} />
            </section>
        )
    }
}

export default Home
