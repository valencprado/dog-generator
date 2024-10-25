import { useRouteError } from 'react-router-dom'
import { Typography } from 'antd'

const { Title, Text } = Typography

const Error = ()  => {
    const error = useRouteError()
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Title>Ops! Aconteceu um erro! :(</Title>
        <Title level={2} type='danger'>{error.message || error.statusText}</Title>
        </div>
    )
}

export default Error