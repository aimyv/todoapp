import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styled from "styled-components";

const Title = styled.p`
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
`;


const Content = styled(DialogContent)`
  position: relative;
`;

function Modal({
  title,
  open,
  setOpen,
  children,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <Content>
        <Title id="dialog-title">{title}</Title>
        {children}
      </Content>
    </Dialog>
  );
}

export default Modal