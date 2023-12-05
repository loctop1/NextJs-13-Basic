'use client'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}

function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props;

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const handleSubmit = () => {
        console.log(">>> check form data: ", title, author, content)
    }

    // Chức năng đóng Modal
    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModalCreate(false);
    }

    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Them danh sach Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tieu de</Form.Label>
                            <Form.Control
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type="text"
                                placeholder="Nhap tieu de"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Tac gia</Form.Label>
                            <Form.Control
                                onChange={(e) => setAuthor(e.target.value)}
                                value={author}
                                type="text"
                                placeholder="Nhap ten tac gia"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Noi dung</Form.Label>
                            <Form.Control
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                                as="textarea"
                                rows={3}
                                placeholder='Nhap noi dung'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Dong
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Luu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;