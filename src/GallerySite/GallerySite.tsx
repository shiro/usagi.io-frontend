import * as React from "react";
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";

import GalleryDescriptionSection from "@/GallerySite/GalleryDescriptionSection";
import GalleryGrid from "@/GallerySite/GalleryGrid/GalleryGrid";
import FullscreenGalleryImage from "@/GallerySite/FullscreenGalleryImage";
import {useState} from "react"
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {GetAllImagesDocument, IImage} from "@/generated/schema";


export interface IGallerySite {
}

// class ImageQuery extends Query<Image, {}>{}
// const foo  :Query= {images: undefined};


const GallerySite: React.FC<IGallerySite> = (props) => {
    const [openPicture, setOpenPicture] = useState<IImage | undefined>(undefined);

    const {loading, error, data} = useQuery(GetAllImagesDocument);

    // TODO handle error
    if (error)
        console.error(error);

    return (
        <div>
            <Header/>
            <GalleryDescriptionSection/>
            {!loading &&
            <GalleryGrid pictures={data.images} onImageClick={(picture) => {setOpenPicture(picture)}}/>
            }
            <FullscreenGalleryImage isOpen={!!openPicture} picture={openPicture} onClose={() => {setOpenPicture(undefined)}}/>
            <Footer/>
        </div>
    );
};


export default GallerySite;
