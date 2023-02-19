import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { IoMailOutline } from "react-icons/io5";
import Styles from './Footer.module.css'

export default function ShowTooltip() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)} className={Styles.mailButton}>
      <CopyToClipboard text={"yoldi.gustavo@gmail.com"}></CopyToClipboard> 
      </Button>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props} onMouseOut={() => setShow(!show)}>
            Mail Copiado!
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

function CopyToClipboard({text}) {
  const [copied, setCopied] = useState("copy");
  return (
    <IoMailOutline
    className={Styles.mailIcon}
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied("copied");
      }}>
      {copied}
    </IoMailOutline>
  );
}

