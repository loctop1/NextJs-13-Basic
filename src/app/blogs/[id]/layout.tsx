

//Hien thi tieu de
export const metadata = {
    title: 'Chi tiet Blog',
    description: 'Loctop1',
}

export default function ViewDetailLayout({
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