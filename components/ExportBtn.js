"use client"

import { FiDownload } from "react-icons/fi"
import { write, utils, writeFile } from "xlsx"
const ExportBtn = () => {

    function ExportToExcel(type, fn, dl) {
        var elt = document.getElementById('tbl_exporttable_to_xls');
        var wb = utils.table_to_book(elt, { sheet: "sheet1" });
        return dl ?
            write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
            writeFile(wb, fn || ('excel-data.' + (type || 'xlsx')));
    }
    return (
        <button onClick={() => ExportToExcel('xlsx')} className="bg-[#04aa6d] text-white font-bold w-full text-sm h-12 p-4 rounded-[16px] flex gap-2 items-center justify-center">
            Convert to Excel
            <FiDownload className="text-xl font-sans font-bold" />
        </button>
    )
}

export default ExportBtn
