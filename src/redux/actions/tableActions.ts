import { faker } from '@faker-js/faker';
import { CREATE_TABLE, UPDATE_TABLE, GENERATE_TABLE, DEFAULT_TABLE_SIZE } from "../../consts";
import { Table, TableRow } from "../../types";

export const createTable = (): { type: string, payload: Table } => {
    let rows: TableRow[] = [];

    return { type: CREATE_TABLE, payload: { rows: rows } };
};

export const updateTable = (table: Table): { type: string, payload: Table } => {
    return { type: UPDATE_TABLE, payload: { rows: [...table.rows] } };
};

export const generateTable = (): { type: string, payload: Table } => {
    let rows: TableRow[] = [];

    for (let i = 0; i < DEFAULT_TABLE_SIZE; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const age = faker.number.int({ min: 17, max: 45 });
        const height = faker.number.float({ min: 165, max: 215, fractionDigits: 2 });
        const weight = faker.number.float({ min: 60, max: 90, fractionDigits: 2 });
        rows.push({ firstName: firstName, lastName: lastName, age: age, height: height, weight: weight });
    }

    return { type: GENERATE_TABLE, payload: { rows: rows } };
};
