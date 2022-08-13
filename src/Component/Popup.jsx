import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import * as FaIcons from 'react-icons/fa';
import Styled from 'styled-components';

const Popup = (props) => {
    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <div>
            <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
                <DialogTitle>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <CloseBtn onClick={() => setOpenPopup(false)}><FaIcons.FaTimes /></CloseBtn>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <div>{children}</div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Popup;

const CloseBtn = Styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1.5px;
    color: gray;
    cursor: pointer;
    &:hover{
        background:rgba(180, 180, 180, 0.687);
        color: white;
    }
`