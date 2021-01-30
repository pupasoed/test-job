import React from 'react'
import styled from 'styled-components'

export const PlayersTable = () => {
    return (
        <TableWrapper>
            <Table>
                <Caption><TableTitle>Roster</TableTitle></Caption>
                <thead>
                <Tr>
                    <th>id</th>
                    <th>Player</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Age</th>
                </Tr>
                </thead>
                <tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>
                        <div>Artyr Covid</div>
                        <div>Bol Bol Centerforward</div>

                    </Td>
                    <Td>218 cm</Td>
                    <Td>100 kg</Td>
                    <Td>49</Td>
                </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>
                        <div>Artyr Covid</div>
                        <div>Bol Bol Centerforward</div>

                    </Td>
                    <Td>218 cm</Td>
                    <Td>100 kg</Td>
                    <Td>49</Td>
                </Tr>

                </tbody>
            </Table>
        </TableWrapper>

    );
}
const Caption = styled.caption`
  border-bottom: 1px solid #9C9C9C;
  text-align: inherit;
  height: 40px;
`

const TableWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  background: #ffffff;
  border: 1px solid #9C9C9C;
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
  border-bottom: 1px solid #9C9C9C;
  box-sizing: border-box;
  color: #707070;
`

const Td = styled.td`
  width: 56px;
  text-align: center;
  border-bottom: 0.5px solid #9C9C9C;
  box-sizing: border-box;
`