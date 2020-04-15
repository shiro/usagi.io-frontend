import * as React from "react";
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";

import GalleryDescriptionSection from "@/GallerySite/GalleryDescriptionSection";
import GalleryGrid from "@/GallerySite/GalleryGrid/GalleryGrid";
import FullscreenGalleryImage from "@/GallerySite/FullscreenGalleryImage";
import {useState} from "react"
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

;


export interface IGallerySite {
}


const GET_HELLO = gql`
query{
  hello
}
`;

const GallerySite: React.FC<IGallerySite> = (props) => {
    const [isImageOpen, setIsImageOpen] = useState(true);


    const {loading, error, data} = useQuery(GET_HELLO);
    // if (loading) return <p>Loading ...</p>;

    console.log(data);

    return (
        <div>
            <Header/>
            <GalleryDescriptionSection/>
            <GalleryGrid onImageClick={() => {setIsImageOpen(true)}}/>
            <FullscreenGalleryImage isOpen={isImageOpen} onClose={() => {setIsImageOpen(false)}}/>
            <Footer/>
        </div>
    );
};


export default GallerySite;
