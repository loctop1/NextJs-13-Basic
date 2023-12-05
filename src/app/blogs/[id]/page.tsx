
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
    console.log(">>> check props: ", params.id);
    return (
        <div>
            Check Id {params.id}
        </div>
    )
}
export default ViewDetailBlog;