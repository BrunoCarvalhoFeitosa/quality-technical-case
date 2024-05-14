import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  padding: 50px 20px;
`;

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media only screen and (min-width: 1240px) {
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ListLi = styled.li`
  flex: 1;
  width: 100%;
  padding: 20px 25px;
  border: 1px solid #efefef;
  border-radius: 12px;

  @media only screen and (min-width: 1024px) {
    max-width: 300px;
  }
`;

export const ListInfo = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ListInfoDataBold = styled.div`
  font-size: 18px;
  font-weight: 900;
`;

export const ListInfoData = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ListInfoCopyButton = styled.button`
  background: black;
  border: none;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fe9800;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
  transform: scale(0.95);
  transition: transform 0.3s;
  cursor: pointer;
`;
