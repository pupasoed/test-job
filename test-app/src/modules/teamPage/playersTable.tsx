import React from 'react';
import styled from 'styled-components';

export const PlayersTable = () => {

    const items = [
        {
            id: 1,
            name: 'Jon Bol',
            position: 'Centerforward',
            height: 319,
            weight: 100,
            age: 45
        },
        {
            id: 2,
            name: 'Jon1',
            position: 'Centerforward',
            height: 319,
            weight: 100,
            age: 30
        }
    ]

    const renderRow = (item) => {
        const { id, name, position, height, weight, age } = item
        return (
            <Tr>
                <Td width={'80px'} textAlign={'center'}>{id}</Td>
                <Td textAlign={'left'}>
                    <div className={'color: red;'} >{name}</div>
                    <div>{position}</div>
                </Td>
                <TdLeft width={'120px'} textAlign={'left'}>{`${height} cm`}</TdLeft>
                <TdLeft width={'120px'} textAlign={'left'}>{`${weight} kg`}</TdLeft>
                <TdLeft width={'60px'} textAlign={'left'}>{age}</TdLeft>
            </Tr>
        )
    }

    return (
        <TableWrapper>
            <Table >
                <Caption><TableTitle>Roster</TableTitle></Caption>
                <thead>
                <Tr>
                    <Th width={'80px'} textAlign={'center'}>#</Th>
                    <Th textAlign={'left'}>Player</Th>
                    <ThLeft width={'120px'} textAlign={'left'}>Height</ThLeft>
                    <ThLeft width={'120px'} textAlign={'left'}>Weight</ThLeft>
                    <ThLeft width={'60px'} textAlign={'left'}>Age</ThLeft>
                </Tr>
                </thead>
                <tbody>
                { items.map(renderRow) }
                </tbody>
            </Table>
        </TableWrapper>

    );
}
const Caption = styled.caption`
  text-align: inherit;
  height: 33px;
  margin-top: 8px;
`

const TableWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  background: #ffffff;
  border: 0.5px solid #9C9C9C;
  box-sizing: border-box;
  border-radius: 10px 10px 10px 10px;
`

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`

const TableTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #707070;
  width: 40px;
  margin: 14px 32px;
`

const Tr = styled.tr`
  box-shadow: 0px -0.5px 0px #9c9c9c;
  box-sizing: border-box;
  color: #707070;
`

const Td = styled.td`
  height: 56px;
  box-sizing: border-box;
  width: ${props => props.width };
  text-align: ${props=> props.textAlign};
`

const Th = styled.th`
  height: 40px;
  width: ${props => props.width };
  text-align: ${props=> props.textAlign};
`

const ThLeft = styled(Th)`
@media screen and (max-width: 1110px){
  display: none;
}
`

const TdLeft = styled(Td)`
@media screen and (max-width: 1110px){
  display: none;
}
`
