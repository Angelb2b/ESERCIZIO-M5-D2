import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const DeleteComment = ({ getMethod , asin }) => {
    const [commentValue, setCommentValue] = useState('');
    const [rateValue, setRateValue] = useState('')



    const DeleteComment = async (event) => {
        event.preventDefault();

        setCommentValue(event.target.value);
        setRateValue(event.target.value);


        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNmJhZWI5YzBmNzAwMTQ0ODRmYmUiLCJpYXQiOjE2ODg3MzcyNTEsImV4cCI6MTY4OTk0Njg1MX0.S1k9iTQ_OMaSTN52DcIpEyVCDP0lkuMZTh7IMaY5hFw',
                    'Content-Type': 'application/json'
                },
               
            });

            if (!response.ok) {
                throw new Error('Errore');
            } else {
                getMethod();
            }



        } catch (error) {
            console.log(error);
        }
    }

    return (
          <Button onClick={ DeleteComment} className="me-2 mt-2"  variant="outline-danger">Delete </Button>
   )

}

export default DeleteComment