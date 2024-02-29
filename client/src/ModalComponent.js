import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ReactImageMagnify from 'react-image-magnify';
import "./App.css"
const ModalComponent = ({ open, handleClose, product }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
         <Box sx={style}>
      <div className="modal-content">
        <h2 id="modal-modal-title">{product ? product.name : ''}</h2>
        {product && (
          <div>
            <div className="total">
            <div className="wrapper">
           
            <p>Painter: {product.painter}</p>
            <p>Size: {product.size}</p>
            <p>Price: ${product.price}</p>
            <p>Release Date: {product.releaseDate}</p>   
            </div>
            <div className="wrapper">
              <div className="div">
                <button> Add to Cart</button>
               
              </div>
              <div className="div">
              <button> Buy Now</button>
              </div>
            </div>
            </div>
            
            <ReactImageMagnify {...{
    smallImage: {
        alt: '',
        isFluidWidth: true,
        src: product.img
    },
    largeImage: {
        src: product.img,
        width: 1000,
        height: 1800
    }
}} />
            {/* <img src={product.img} alt={product.name} style={{height:'30rem'}} /> */}
            {/* Add any other details you want to display */}
          </div>
        )}
      </div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
