"use client";
import { useState } from "react";
import { ImageType } from "@/app/types/Image";
import { Hero } from "@/app/components/common/Hero";
import { List } from "../List";
import { Pagination } from "../Pagination";
import * as Styled from "./styled";

interface ContentProps {
    generatedImages: ImageType[];
    itemsPerPage: number;
};

export const Content = ({ generatedImages, itemsPerPage }: ContentProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = generatedImages.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(generatedImages.length / itemsPerPage);

    return (
        <Styled.ContentWrapper>
            <Hero
                title="Faça download de imagens randômicas para suas aplicações."
                description="Faça download de imagens para suas aplicações e agilize seu trabalho."
            />
            <List currentItems={currentItems} />
            <Pagination
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </Styled.ContentWrapper>
    );
};