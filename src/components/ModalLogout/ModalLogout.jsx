import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/thunk';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import Buttons from 'components/Buttons/Buttons';
import styles from './ModalLogout.module.scss';

const ModalLogout = ({ isModalOpen, handleModalClose }) => {
  const dispatch = useDispatch();

  return (
    <ModalTemplate
      open={isModalOpen}
      onClose={handleModalClose}
      title="Log out"
    >
      <p className={styles.ModalLogout__text}>
        Are you sure you want to log out?
      </p>
      <Buttons
        firstButtonText="Log out"
        secondButtonText="Cancel"
        firstButtonHandler={() => {
          dispatch(logOutUser());
          handleModalClose();
        }}
        secondButtonHandler={handleModalClose}
      />
    </ModalTemplate>
  );
};

export default ModalLogout;
