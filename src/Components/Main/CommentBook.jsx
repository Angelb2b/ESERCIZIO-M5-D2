import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import DeleteComment from "./DeleteComment";
import ModificaComment from "./ModificaComment";
import AddComment from "./AddComment";

const CommentBook = ({ asin }) => {
    const [bookComments, setBookComments] = useState(null);
   

    const getCommentModal = async () => {
   
   if( asin!==""){
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNmJhZWI5YzBmNzAwMTQ0ODRmYmUiLCJpYXQiOjE2ODg3MzcyNTEsImV4cCI6MTY4OTk0Njg1MX0.S1k9iTQ_OMaSTN52DcIpEyVCDP0lkuMZTh7IMaY5hFw'
                }

            })

            const response = await data.json();
            setBookComments(response)
            console.log(response);


        } catch (error) {
            console.log(error);

        }
    }
    }
    useEffect(() => {
        console.log(asin);
        getCommentModal();

    }, [asin]);

    return (
        <ListGroup className="d-flex justify-content-between align-items-start" as="ol" numbered>
        {bookComments &&
            bookComments.map((comment) => (
              
                <ListGroup.Item key={comment._id}>
                    <div>
                        <div>{comment.comment}</div>
                        <div>Voto: {comment.rate}</div>
                        <div>Autore: {comment.author}</div>

                    </div>
                    <DeleteComment  getMethod={getCommentModal} asin={comment._id} />
                    <ModificaComment getMethod={getCommentModal} comment={comment}  />
                    <AddComment asin={asin} getMethod={getCommentModal} />
                </ListGroup.Item>
            ))}
    </ListGroup>
)


}

export default CommentBook