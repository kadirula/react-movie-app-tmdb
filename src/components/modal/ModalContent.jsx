import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieModal } from '../../redux/reducers/modalReducer'


const ModalContent = ({ children }) => {

    const dispatch = useDispatch();
    const { movieModal } = useSelector(state => state.modal);

    const handleModalClose = () => {
        dispatch(setMovieModal({
            modal: false,
            movie: null
        }))
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal
                show={movieModal.modal}
                onHide={handleModalClose}
                size="lg"
                centered
            >
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalContent