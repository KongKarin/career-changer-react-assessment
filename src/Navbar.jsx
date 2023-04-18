import './style/index.css'

const Navbar = () => {
    return (
        <div className='thisIsNav'> 
            <ul>
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/Owner'}>Owner</a></li>
            </ul>
            <hr/>
        </div>
    )
}

export default Navbar