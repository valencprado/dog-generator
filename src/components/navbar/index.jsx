import {Menu} from 'antd'
const items = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Raça',
        key: 'breed',
    },
    {
        label: 'Ver todos',
        key: 'all'
    }
]
const Navbar = () => {
    return (
    <Menu items={items} mode='horizontal'/>
    )
}

export default Navbar;