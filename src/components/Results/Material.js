import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
// import button from '@material-ui/core/button';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
import ArrowIcon from "../../images/n_7808.png";
import ArrowDownIcon from "../../images/arrow_2.png";
function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {

    const getNumberOfPages = () => {}
    const handleFirstPageButtonClick = () => {
        onChangePage(1);
    };

    // RDT uses page index starting at 1, MUI starts at 0
    // i.e. page prop will be off by one here
    const handleBackButtonClick = () => {
        onChangePage(page);
    };

    const handleNextButtonClick = () => {
        onChangePage(page + 2);
    };

    const handleLastPageButtonClick = () => {
        onChangePage(getNumberOfPages(count, rowsPerPage));
    };

    return (
        <>
            <button onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {/* <FirstPageIcon /> */}
            </button>
            <button onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {/* <KeyboardArrowLeft /> */}
            </button>
            <button
                onClick={handleNextButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="next page"
            >
                <ArrowIcon />
            </button>
            <button
                onClick={handleLastPageButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="last page"
            >
                <ArrowIcon />
            </button>
        </>
    );
}

const CustomMaterialPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
    <TablePagination
        component="nav"
        count={rowCount}
        rowsPerPage={rowsPerPage}
        page={currentPage - 1}
        onChangePage={onChangePage}
        onChangeRowsPerPage={({ target }) => onChangeRowsPerPage(Number(target.value))}
        ActionsComponent={TablePaginationActions}
    />
);

export default CustomMaterialPagination