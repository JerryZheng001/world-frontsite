import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from 'styled-components'
import TableContainer from '@material-ui/core/TableContainer'

const StyledTable = styled(Table) <{ stickyBg: string; showLastBorder?: boolean }>`

  .MuiTableCell-root {
    border-color: #19202b;
    padding: 22px 16px;
  }
  .MuiTableCell-root.MuiTableCell-body {
    display: table-cell;
    vertical-align: middle;
  }
  .MuiTableCell-stickyHeader {
    background-color: ${({ stickyBg }) => stickyBg};
    &:first-child{
      border-radius: 12px 0 0 0;
    }
    &:last-child{
      border-radius: 0 12px 0 0;
    }
  }
  .MuiTableRow-root {
    background: rgba(225,225,225,.05);
    
    &:last-child {
      .MuiTableCell-body {
        border: ${({ showLastBorder }) => (showLastBorder ? '1px solid rgba(225,225,225,.2)' : 'none !important')};
        border-radius: 0 0 12px 12px;
      }
    }
  }
`

export default function BasicTable({
  header,
  rows,
  maxH,
  stickyHeader = false,
  stickyHeaderBg = '#00040A',
  padding = '0',
  showLastBorder = false
}: {
  header: string[]
  rows: (string | number | JSX.Element)[][]
  stickyHeader?: boolean
  maxH?: number
  stickyHeaderBg?: string
  padding?: string
  showLastBorder?: boolean
}) {
  return (
    <TableContainer
      style={{
        maxHeight: maxH,
        padding
      }}
    >
      <StyledTable
        stickyHeader={stickyHeader}
        stickyBg={stickyHeaderBg}
        showLastBorder={showLastBorder}
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            {header.map((string, idx) =>
              header.length === idx + 1 ? (
                <TableCell align="right" key={idx}>
                  {string}
                </TableCell>
              ) : (
                <TableCell key={idx}>{string}</TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row[0].toString() + index}>
              {row.map((data, idx) =>
                row.length === idx + 1 ? (
                  <TableCell align="right" key={idx}>
                    {data}
                  </TableCell>
                ) : (
                  <TableCell key={idx}>{data}</TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
