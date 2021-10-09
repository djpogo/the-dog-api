import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Image from '../components/Image';

const apiUrl = process.env.REACT_APP_API_DETAIL_URL;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.dogId = this.props.match.params.dogId;
        this.state = { dog: {} };
    }
    componentDidMount() {
        this.fetchDog(this.dogId, this.props.apiUrl);
    }

    fetchDog(dogId) {
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