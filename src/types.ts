export interface TableRow {
    firstName: string;
    lastName: string;
    age: number;
    height: number;
    weight: number;
}

export interface Table {
    rows: TableRow[];
}