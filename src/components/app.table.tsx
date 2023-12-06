'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    /**Đây là interface mới, IProps, có một thuộc tính blogs kiểu là một mảng các đối tượng thuộc interface IBLog. */
    blogs: IBLog[]
    // Gán lại mảng đã khai báo IBlog ở backend.d.ts
}

const AppTable = (props: IProps) => {
    const { blogs } = props;

    const [blog, setBlog] = useState<IBLog | null>(null);
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

    // Delete Api
    const handleDeleteBlog = (id: number) => {
        if (confirm(`Ban co muon xoa (id = ${id})`)) {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },

            }).then(res => res.json())
                .then(res => {
                    if (res) {
                        toast.success("Xoa Blog thanh cong");
                        mutate("http://localhost:8000/blogs")
                    }
                });
        }
    }
    return (
        <>
            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Danh sách API</h3>
                <Button variant='secondary' onClick={() => setShowModalCreate(true)}>
                    Thêm mới
                </Button>
            </div>
            <Table responsive bordered hover size="sm" className='border-dark'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Tác giả</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <Button>
                                        <Link href={`/blogs/${item.id}`} className='text-white text-decoration-none fw-bold'>Xem chi tiết</Link>
                                    </Button>
                                    <Button variant='warning' className='mx-3'
                                        onClick={() => {
                                            setBlog(item);
                                            setShowModalUpdate(true);
                                        }}
                                    >Sửa</Button>
                                    <Button variant='danger' onClick={() => handleDeleteBlog(item.id)}>Xóa</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            <UpdateModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog}
            />
        </>
    )
}

export default AppTable;