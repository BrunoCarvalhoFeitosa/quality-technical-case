"use client";
import { useState } from "react";
import { PeopleType } from "@/app/types/People";
import { Hero } from "@/app/components/common/Hero";
import { List } from "../List";
import { Pagination } from "../Pagination";
import * as Styled from "./styled";

interface ContentProps {
    generatedPeoples: PeopleType[];
    itemsPerPage: number;
};

export const Content = ({ generatedPeoples, itemsPerPage }: ContentProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = generatedPeoples.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(generatedPeoples.length / itemsPerPage);

    return (
        <Styled.GeneratedPeoplesContainer>
            <Hero
                title="Copie e cole dados de pessoas randômicas para suas aplicações."
                description="Copie e cole os dados fornecidos pelos nossos serviços para suas aplicações e agilize seu trabalho."
            />
            <List currentItems={currentItems} />
            <Pagination
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </Styled.GeneratedPeoplesContainer>
    );
};