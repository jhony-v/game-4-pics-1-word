import React, { useEffect } from "react";
import RowItem from "src/components/molecules/RowItem"
import Paragraph from "src/components/molecules/Paragraph"
import Flex from "src/components/dom/Flex"
import IconNatural from "src/components/atoms/IconNatural"
import { IoMdStar, IoIosApps } from "react-icons/io"
import { navigate } from 'gatsby';
import ImageSquarePreview from "../previewModal/ImageSquarePreview";
import { StyleSheet } from "aphrodite";

const selfStyle = new StyleSheet.create({
    item : {
        padding : "20px 10px"
    }
})

const ItemFlatListWord = ({ current, images, letters, points }) => {
    const handlerNavigate = () => navigate("/word", { state: current });

    return (
        <RowItem
            onClick={handlerNavigate}
            styles={selfStyle.item}
            leftBody={
                <ImageSquarePreview
                    images={images}
                    onClick={handlerNavigate} />
            }
            centerBody={
                <Flex>
                    <Paragraph
                        title={letters + "..."}
                        detail={`${current.dateCreated}`} />
                    <IconNatural
                        icon={points !== 0 ? <IoMdStar color="darkorange" /> : <IoIosApps color="gray" />}
                        text={points !== 0 && points.toString()} />
                </Flex>
            }
        />
    )
}

export default ItemFlatListWord;