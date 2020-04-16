import * as React from "react";
import cn from "classnames";

import css from "./FullscreenGalleryImage.module.scss";
import Modal from 'react-modal';
import {useLockBodyScroll} from "@/hooks/useScrollLock";
import {IPicture} from "server/imageLoader";


Modal.setAppElement('#root');

export interface IFullscreenGalleryImage {
    isOpen?: boolean;
    picture?: IPicture,
    onClose?: () => void;
}


const FullscreenGalleryImage: React.FC<IFullscreenGalleryImage> = (props) => {
    const {isOpen = false, onClose, picture} = props;

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
            {/* TODO handle no picture */}
            <img className={cn(css.image)} src={picture?.source} alt="gallery picture" onClick={onClose}/>
        </Modal>
    );
};


export default FullscreenGalleryImage;
