"use client";
import { Flip, toast } from "react-toastify";
import { PeopleType } from "@/app/types/People";
import { MdOutlineContentCopy, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TbBuildingEstate } from "react-icons/tb";
import { GrMap } from "react-icons/gr";
import * as Styled from "./styled";

interface ListProps {
    currentItems: PeopleType[];
};

export const List = ({ currentItems }: ListProps) => {
    const handleCopyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value);
        toast("Texto copiado.", {
            type: "success",
            toastId: "success",
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Flip
        });
    };

    return (
        <Styled.ListContainer>
            <Styled.ListUl>
                {currentItems.map((people) => (
                    <Styled.ListLi key={people.id}>
                        <Styled.ListInfo id="people-name">
                            <Styled.ListInfoDataBold>
                                {people.name}
                            </Styled.ListInfoDataBold>
                            <Styled.ListInfoCopyButton
                                onClick={() => handleCopyToClipboard(people.name)}
                            >
                                <MdOutlineContentCopy />
                            </Styled.ListInfoCopyButton>
                        </Styled.ListInfo>
                        <Styled.ListInfo id="people-username">
                            <Styled.ListInfoData>
                                <AiOutlineUser />
                                {people.username}
                            </Styled.ListInfoData>
                            <Styled.ListInfoCopyButton
                                onClick={() => handleCopyToClipboard(people.username)}
                            >
                                <MdOutlineContentCopy />
                            </Styled.ListInfoCopyButton>
                        </Styled.ListInfo>
                        <Styled.ListInfo id="people-phone">
                            <Styled.ListInfoData>
                                <MdOutlinePhone />
                                {people.phone}
                            </Styled.ListInfoData>
                            <Styled.ListInfoCopyButton
                                onClick={() => handleCopyToClipboard(people.phone)}
                            >
                                <MdOutlineContentCopy />
                            </Styled.ListInfoCopyButton>
                        </Styled.ListInfo>
                        <Styled.ListInfo id="people-email">
                            <Styled.ListInfoData>
                                <MdOutlineEmail />
                                {people.email}
                            </Styled.ListInfoData>
                            <Styled.ListInfoCopyButton
                                onClick={() => handleCopyToClipboard(people.email)}
                            >
                                <MdOutlineContentCopy />
                            </Styled.ListInfoCopyButton>
                        </Styled.ListInfo>
                        <Styled.ListInfo id="people-address">
                            <Styled.ListInfoData>
                                <TbBuildingEstate />
                                {people.address.street}, {people.address.geo.lat}
                            </Styled.ListInfoData>
                            <Styled.ListInfoCopyButton
                                onClick={() => handleCopyToClipboard(`${people.address.street}, ${people.address.geo.lat}`)}
                            >
                                <MdOutlineContentCopy />
                            </Styled.ListInfoCopyButton>
                        </Styled.ListInfo>
                        <Styled.ListInfo id="people-geolocation">
                            <Styled.ListInfoData>
                                <GrMap />
                                {people.address.geo.lat} Lat, {people.address.geo.lng} Lng
                            </Styled.ListInfoData>
                            <Styled.ListInfoCopyButton
                                onClick={() => handleCopyToClipboard(`${people.address.geo.lat} Lat, ${people.address.geo.lng} Lng`)}
                            >
                                <MdOutlineContentCopy />
                            </Styled.ListInfoCopyButton>
                        </Styled.ListInfo>
                    </Styled.ListLi>
                ))}
            </Styled.ListUl>
        </Styled.ListContainer>
    );
};
