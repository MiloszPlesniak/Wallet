import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ModalTemplate.module.scss';

const ModalTemplate = ({ children, open, onClose, title }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-template"
      aria-describedby="modal-template"
    >
      <div className={styles.ModalTemplate__container}>
        <div className={styles.ModalTemplate__header}>
          <h2 id="modal-template">{title}</h2>
          <IconButton
            className={styles.ModalTemplate__close}
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'text.secondary',
              '@media screen and (max-width: 768px)': {
                display: 'none',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default ModalTemplate;
