"use client";
import { ImageType } from "@/app/types/Image";
import Image from "next/image";
import * as Styled from "./styled";

interface ListProps {
    currentItems: ImageType[];
};

const downloadImage = async (imageUrl: string) => {
    window.open(imageUrl);
};

export const List = ({ currentItems }: ListProps) => {
    return (
        <Styled.ListContainer>
            <Styled.ListUl>
                {currentItems.map((image) => (
                    <Styled.ListLi key={image.id}>
                        <Styled.ListInfo>
                            <Styled.ListInfoImage>
                                <Image
                                    fill
                                    sizes="100vw"
                                    src={image.url}
                                    alt={image.title}
                                />
                            </Styled.ListInfoImage>
                            <Styled.ListInfoData>
                                Imagem randômica.
                            </Styled.ListInfoData>
                            <Styled.ListInfoCopyButton
                                onClick={() => downloadImage(image.url)}
                            >
                                Download
                            </Styled.ListInfoCopyButton>
                        </Styled.ListInfo>
                    </Styled.ListLi>
                ))}
            </Styled.ListUl>
        </Styled.ListContainer>
    );
};
