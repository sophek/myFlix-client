import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;

        return (
            <Card className="text-wrap">
                <Card.Img
                    variant="top"
                    crossOrigin="anonymous | use-credentials"
                    Access-Control-Allow-Origin
                    src={movieData.ImagePath}
                />
                <Card.Body>
                    <Card.Title>{movieData.Title}</Card.Title>
                    <Card.Text>{movieData.Description}</Card.Text>
                    <Button
                        onClick={() => onMovieClick(movieData)}
                        variant="link"
                    >
                        Open
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};
