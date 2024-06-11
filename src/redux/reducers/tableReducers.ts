import { CREATE_TABLE, GENERATE_TABLE, UPDATE_TABLE } from "../../consts";
import { Table } from "../../types";

interface TableState {
    table: Table;
}

const initialTable: TableState = {
    table: { rows: [] }
};

export const tableReducer = (state = initialTable, action: any): TableState => {
    switch (action.type) {
        case CREATE_TABLE:
            return { ...state, table: action.payload };
        case UPDATE_TABLE:
            return { ...state, table: action.payload };
        case GENERATE_TABLE:
            return { ...state, table: action.payload };
        default:
            return state;
    }
};
