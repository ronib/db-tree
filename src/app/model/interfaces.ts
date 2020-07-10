
export interface TreeNode {
    name: string;
    id: number;
    type: Entity;
    parent: number;
    permision?: boolean;
    children?: TreeNode[];
    expanded?: boolean;
}

export const CONNECTION_LEVEL = 0;

export enum Entity {
    Connection = "connection",
    Database = "database",
    Schema = "schema",
    Table = "table",
    Column = "column"
}
