

//Hien thi tieu de
export const metadata = {
    title: 'Danh sach Blog',
    description: 'Loctop1',
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}