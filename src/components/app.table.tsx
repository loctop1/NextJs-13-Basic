'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

interface IProps {
    /**Đây là interface mới, IProps, có một thuộc tính blogs kiểu là một mảng các đối tượng thuộc interface IBLog. */
    blogs: IBLog[]
    // Gán lại mảng đã khai báo IBlog ở backend.d.ts
}

const AppTable = (props: IProps) => {
    const { blogs } = props;
    console.log('check Blogs: ', blogs);
    return (
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
                {blogs?.map(blog => {
                    return (
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>
                                <Button variant='success'>Xem chi tiết</Button>
                                <Button variant='warning' className='mx-3'>Sửa</Button>
                                <Button variant='danger'>Xóa</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default AppTable;