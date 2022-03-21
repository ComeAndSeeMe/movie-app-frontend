import { Button } from 'antd'
import React from 'react'
import { Wrapper,Button } from './Button.styles'
import Dialog from '../Dialog'

const Button = () => {
    const [showDialog, setShowDialog] = useState(false)

    const openDialog = () =>{setShowDialog (prev => !prev)}
    return (
        <Wrapper>
            <Button onClick={openDialog}>
                不知道
            </Button>
            <Dialog showDialog={showDialog} setShowDialog={setShowDialog} />
        </Wrapper>
    )
}

export default Button