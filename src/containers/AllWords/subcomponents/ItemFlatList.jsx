import React from "react";
import RowItem from "src/components/molecules/RowItem"
import Paragraph from "src/components/molecules/Paragraph"
import { FaEllipsisV } from "react-icons/fa"
import Flex from "src/components/dom/Flex"
import IconNatural from "src/components/atoms/IconNatural"
import { IoMdStar } from "react-icons/io"
import { navigate } from 'gatsby';
import ImageSquarePreview from "./ImageSquarePreview";


const ItemFlatList = ({ current, images, letters }) => {
    const handlerNavigate = () => navigate("/word", { state: current });
    return (
        <RowItem
            onClick={handlerNavigate}
            styles={{ padding: "20px 10px" }}
            leftBody={
                <ImageSquarePreview
                    images={images}
                    onClick={handlerNavigate} />
            }
            centerBody={
                <Flex>
                    <Paragraph
                        title={letters + "..."}
                        detail={current.detail || new Date().toLocaleString()} />
                    <IconNatural
                        icon={<IoMdStar />}
                        coloricon="darkorange"
                        text={""} />
                </Flex>
            }
            rightBody={
                <FaEllipsisV size={14} color="gray" />
            } />
    )
}

export default ItemFlatList;