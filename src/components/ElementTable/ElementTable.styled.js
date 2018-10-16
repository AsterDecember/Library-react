import styled, { css } from 'styled-components';

const tableColumnStyle = css`
    vertical-align: middle;
    padding: 15px 10px;
    border-radius: 2px;
    display: table-cell;
    text-align: left;
`;

const Table = styled.table`
    width: 100%;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
`;

const TableHead = styled.thead`
    color: rgba(0,0,0,0.6);
`;

const TableBody = styled.tbody`
    /* text-align: center; */
`;

const TableRow = styled.tr`
    /* border-bottom: 1px solid rgba(0,0,0,0.12); */

    tbody > &:nth-child(odd) {
        background-color: rgba(242,242,242,0.5);
    }
`;

const TH = styled.th`
    ${tableColumnStyle}
`;

const TD = styled.td`
    ${tableColumnStyle}
`;

const TD10 = styled.td`
    ${tableColumnStyle}
    width: 10%;
`;

const TD15 = styled.td`
    ${tableColumnStyle}
    width: 15%;
`;

const TD20 = styled.td`
    ${tableColumnStyle}
    width: 20%;
`;

const TD25 = styled.td`
    ${tableColumnStyle}
    width: 25%;
`;

const TD30 = styled.td`
    ${tableColumnStyle}
    width: 30%;
`;

const TD35 = styled.td`
    ${tableColumnStyle}
    width: 35%;
`;

const TD40 = styled.td`
    ${tableColumnStyle}
    width: 40%;
`;

const TD45 = styled.td`
    ${tableColumnStyle}
    width: 45%;
`;

const TD50 = styled.td`
    ${tableColumnStyle}
    width: 50%;
`;

export {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TD,
    TH,
    TD10,
    TD15,
    TD20,
    TD25,
    TD30,
    TD35,
    TD40,
    TD45,
    TD50,
};