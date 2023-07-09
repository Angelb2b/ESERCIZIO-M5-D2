import { useState, useEffect} from 'react';
import {  Form,  Button } from 'react-bootstrap';



const AddComment = ({ getMethod , asin }) => {

    const [commentValue, setCommentValue] = useState('');
    const [rateValue, setRateValue] = useState('');
    


    const handleSubmit = async (event) => {
        event.preventDefault();

        setCommentValue(event.target.value);
        setRateValue(event.target.value);
        


        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNmJhZWI5YzBmNzAwMTQ0ODRmYmUiLCJpYXQiOjE2ODg3MzcyNTEsImV4cCI6MTY4OTk0Njg1MX0.S1k9iTQ_OMaSTN52DcIpEyVCDP0lkuMZTh7IMaY5hFw',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: commentValue, rate: rateValue,  elementId: asin})
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }else {
                getMethod();
            }



        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
        
        <Form className="d-flex " onSubmit={handleSubmit}>

        
            <Form.Control
                className='me-1  border-dark h-50 mt-3 '
                value={commentValue}
                type="text"
                onChange={(event) => setCommentValue(event.target.value)}
            />
            
            <Form.Control
                className='me-1  border-dark h-50 mt-3'
                value={rateValue}
                type="text"
                onChange={(event) => setRateValue(event.target.value)}

            />
           
            <Button id='commenti' className='ms-2 text-light text-center h-25' type='submit' variant="dark">Aggiungi Commento</Button>
        </Form>
       </>
    );

    
}

export default AddComment;