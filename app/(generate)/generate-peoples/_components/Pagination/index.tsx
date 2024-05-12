"use client";
import * as Styled from "./styled"; 

interface PaginationProps {
    itemsPerPage: number;
    totalPages: number;
    setCurrentPage: (currentPage: number) => void;
    currentPage: number;
};

export const Pagination = ({ totalPages, setCurrentPage, currentPage }: PaginationProps) => {
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <Styled.PaginationContainer>
            <Styled.PaginationUl>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Styled.PaginationLi key={index}>
                        <Styled.PaginationButton
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            style={{
                                background: currentPage === index + 1 ? "#fe9800" : "#EFEFEF"
                            }}
                        >
                            {index + 1}
                        </Styled.PaginationButton>
                    </Styled.PaginationLi>
                ))}
            </Styled.PaginationUl>
        </Styled.PaginationContainer>
    );
};