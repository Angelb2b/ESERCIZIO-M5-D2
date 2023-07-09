import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentModal from './CommentModalArea'
import CommentBook from "./CommentBook";
import './SingleCard.css';


const SingleCard = ({ img, asin, title, price, category, setIdCommenti, idCommenti }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [buttonBorder, setButtonBorder] = useState(false);

    const toggleCommentModal = () => {
        setModalVisible(!modalVisible);
    }

    const toggleCommenti = () => {
        
        setIdCommenti(asin);
    }
   
    const allToggle = () =>{
        toggleCommenti();
    }

    
    useEffect(() => {
        console.log('button border ue:'+ buttonBorder);
   

    }, [buttonBorder]);

    return (
        
        <>
 
            <Card style={{ width: '15rem',  }}>
                <Card.Img className="h-75" variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>€ {price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    <div className="d-flex justify-content-center gap-2">
                    <Button onClick={allToggle}  type='submit' variant="dark">Feedback</Button>
                    <Button className='w-50' type='submit' variant="dark">Dettagli</Button>
                    </div>
                </Card.Body>
            </Card>
            {modalVisible && (
                <CommentModal asin={asin} close={toggleCommentModal} />
            )}
        </>
    )
}

export default SingleCard
