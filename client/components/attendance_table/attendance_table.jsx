import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import MockData from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import GlobalFilter from './global_filter'

const AttendanceTable = ({ user_Attendance }) => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => user_Attendance, []);
    const { getTableProps, state, setGlobalFilter, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, prepareRow, pageOptions, gotoPage, pageCount, setPageSize } = useTable({
        columns: columns,
        data: data,
        initialState: { pageSize: 30 }
    }, useGlobalFilter, usePagination)
    const { globalFilter, pageIndex, pageSize } = state;
    return (
        <div>
            {user_Attendance && <>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                <table {...getTableProps()} id="customers">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} > 
                                        {column.render('Header')}
                                    </th>
                                ))}

                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        })}

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
              
                <div className="flex flex-row justify-between py-6">
                    <div>
                        <span>
                            page{' '}
                            <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                        </span>
                        <span className="ml-3">
                            | {' '} Go to page: {' '}
                            <input className="w-[4rem] ml-1 bg-gray-300 px-3 py-1 rounded-full" type="number" defaultValue={pageIndex + 1} onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(pageNumber)
                            }} />
                        </span>
                    </div>
                    <div className="space-x-4">
                        <select
                        className="px-4 py-2 rounded"
                            value={pageSize}
                            onChange={e => setPageSize(e.target.value)}
                        >
                            {[30, 60, 90].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-gray-50 border-2 px-4 rounded-full py-1" onClick={() => previousPage()} disabled={!canPreviousPage}>prev</button>
                        <button className="bg-gradient-to-r from-blue-400 to-blue-600  text-gray-50 border-2 px-4 py-1 rounded-full" onClick={() => nextPage()} disabled={!canNextPage}>next</button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default AttendanceTable;
