import * as React from "react";
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";

import GalleryDescriptionSection from "@/GallerySite/GalleryDescriptionSection";
import GalleryGrid from "@/GallerySite/GalleryGrid/GalleryGrid";
import FullscreenGalleryImage from "@/GallerySite/FullscreenGalleryImage";
import {useState} from "react";


export interface IGallerySite {
}


const GallerySite: React.FC<IGallerySite> = (props) => {
    const [isImageOpen, setIsImageOpen ] =useState(true);

    return (
        <div>
            <Header/>
            <GalleryDescriptionSection />
            <GalleryGrid onImageClick={() => {setIsImageOpen(true)}} />
            <FullscreenGalleryImage isOpen={isImageOpen} onClose={() => {setIsImageOpen(false)}} />
            <Footer/>
        </div>
    );
};


export default GallerySite;
