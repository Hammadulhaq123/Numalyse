import AddOnSidebar from "../components/AddOnSidebar"

const layout = ({ children }) => {
    return (
        <div className='flex flex-row gap-4 h-auto w-full p-4'>
            {children}
            <AddOnSidebar />
        </div>
    )
}

export default layout
