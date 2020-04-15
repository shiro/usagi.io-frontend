import * as React from "react";
import cn from "classnames";

import css from "./FullscreenGalleryImage.module.scss";
import Modal from 'react-modal';
import {useLockBodyScroll} from "@/hooks/useScrollLock";


Modal.setAppElement('#root');

export interface IFullscreenGalleryImage {
    isOpen?: boolean;
    onClose?: () => void;
}


const FullscreenGalleryImage: React.FC<IFullscreenGalleryImage> = (props) => {
    const {isOpen = false, onClose} = props;

    useLockBodyScroll(isOpen);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => {onClose?.()}}
            contentLabel="Example Modal"
            className={css.modal}
            overlayClassName={css.modalOverlay}
            onAfterClose={() => { onClose?.() }}
        >
            {/* TODO alt text */}
            <img className={cn(css.image)} src="/assets/gallery/sample4.jpg" alt="something" onClick={onClose}/>
        </Modal>
    );
};


export default FullscreenGalleryImage;
