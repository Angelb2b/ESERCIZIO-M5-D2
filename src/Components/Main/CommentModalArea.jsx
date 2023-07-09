import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import ModificaComment from "./ModificaComment";


const CommentModal = ({ close, asin }) => {
    const [bookComments, setBookComments] = useState(null);

    const getCommentModal = async () => {

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
    useEffect(() => {
        getCommentModal();
    }, []);

    return (
        <div
            className="modal show CommentModal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Feedback</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Modal.Body>
                        <ListGroup className="d-flex justify-content-between align-items-start" as="ol" numbered>
                            {bookComments &&
                                bookComments.map((comment) => (

                                    <ListGroup.Item key={comment._id}>
                                        <div className="ms-2 me-auto">
                                            <div>{comment.comment}</div>
                                            <div>Voto: {comment.rate}</div>
                                            <div>Autore: {comment.author}</div>

                                        </div>
                                        <DeleteComment getMethod={getCommentModal} asin={comment._id} />
                                        <ModificaComment getMethod={getCommentModal} comment={comment} />
                                    </ListGroup.Item>
                                ))}
                        </ListGroup>
                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <>
                        <Button onClick={close}>Close</Button>
                        <AddComment asin={asin} getMethod={getCommentModal} />
                    </>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default CommentModal;