import React from 'react'
import { Wrapper, Content, CloseDialogButton } from './Dialog.styles'

const Dialog = ({showDialog,setShowDialog}) => {
    return (
      <div>
         {showDialog ? (
             <Wrapper  showDialog={showDialog}>
                 <Content>
                     <h3>确认执行本次操作？</h3>
                     <button>确认</button>
                 </Content>
                 <CloseDialogButton aria-label='Close dialog' onClick={() => setShowDialog(prev => !prev)}/>
             </Wrapper>
         ) :null }
      </div>
    )
};

export default Dialog
