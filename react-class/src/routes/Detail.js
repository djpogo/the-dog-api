import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Image from '../components/Image';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.dogId = this.props.match.params.dogId;
        this.state = { dog: {} };
    }
    componentDidMount() {
        this.fetchDog(this.dogId, this.props.apiUrl);
    }

    fetchDog(dogId, apiUrl = 'https://api.thedogapi.com/v1/images/') {
        fetch(`${apiUrl}${dogId}`)
            .then(response => response.json())
            .then(data => this.setState({ dog: data }));
    }

    render() {
        return <main>
                <h1>Dog #{this.state.dog.id}</h1>
                <Link to="/">zurück</Link>
                <Image
                    src={this.state.dog.url}
                    alt={this.state.dog.id}
                />
                <Link to="/">zurück</Link>
            </main>
    }
}

export default withRouter(Detail);