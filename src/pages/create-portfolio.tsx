import React, { Component } from 'react';
import { ICreatePortfolioProps } from "../models/pages/create-portfolio.d";

class CreatePortfolio extends Component<ICreatePortfolioProps> {

    onClickCreatePortfolioButton = () => {
        this.props.history.push('/portfolio/detail');
    }

    render() {
        return (
            <div className="create-portfolio-container">
                <p className="top-text">Portföy bulunmamaktadır!</p>
                <p>Portföy Eklemek için, Portföy Oluştur butonuna tıklayarak, portföy ekleme ekranına ulaşabilirsiniz.</p>
                <button className="button-blue" onClick={this.onClickCreatePortfolioButton}>Portföyü Oluştur</button>
            </div>
        );
    }
}

export default CreatePortfolio;
