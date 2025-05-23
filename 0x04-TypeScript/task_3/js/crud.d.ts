import { RowID, RowElement } from '../interface';

// Type for insertRow function
export function insertRow(row: RowElement): RowID;

// Type for deleteRow function
export function deleteRow(rowId: RowID): void;

// Type for updateRow function
export function updateRow(rowId: RowID, row: RowElement): RowID;
