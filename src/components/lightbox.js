import React from "react"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    outline: "none",
    position: "absolute",
    width: "100%",
    boxShadow: theme.shadows[5],
    padding: "0px 4px",
  },
}))
const Lightbox = ({ image, children }) => {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button className="w-full" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        className="h-screen outline-none"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <div className="absolute top-0 right-0 flex items-center justify-center p-2 bg-transparent">
              <div
                className="text-sm text-white bg-transparent"
                onClick={handleClose}
              >
                Затвори
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#ffffff"
                className="w-6"
                outline="#000000"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <img
              src={`${image}`}
              data-sizes="auto"
              className="lazysizes block object-contain w-full max-h-screen outline-none"
              alt={`${image}`}
            />
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default Lightbox
