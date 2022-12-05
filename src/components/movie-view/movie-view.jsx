import React from 'react';

export class MovieView extends React.Component {
    render() {
        const { movieDetails, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img
                        crossOrigin="anonymous | use-credentials"
                        src={movieDetails.ImagePath}
                    />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movieDetails.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movieDetails.Description}</span>
                </div>
                <button
                    onClick={() => {
                        onBackClick(null);
                    }}
                >
                    Back
                </button>
            </div>
        );
    }
}
