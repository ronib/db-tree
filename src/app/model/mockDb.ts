import { TreeNode, Entity } from './interfaces';

export const data: TreeNode[] = [
    {
      "id": 1,
      "type": Entity.Connection,
      "name": "PostgresSQL (Generic) - postgres",
      "parent": 0      
    },
    {
      "id": 2,
      "type": Entity.Connection,
      "name": "PostgrsSQL - ident (no access!)",
      "parent": 0,
      "permision": false
    },
    {
      "id": 3,
      "type": Entity.Connection,
      "name": "PostgresSQL - test",
      "parent": 0
    },
    {
      "id": 4,
      "type": Entity.Database,
      "name": "playground-temp",
      "parent": 3,
      "permision": false
    },
    {
      "id": 5,
      "type": Entity.Database,
      "name": "postgis 24 sample",
      "parent": 3
    },
    {
      "id": 6,
      "type": Entity.Database,
      "name": "postgres",
      "parent": 3
    },
    {
      "id": 7,
      "type": Entity.Schema,
      "name": "esprinter data",
      "parent": 6,
      "permision": false
    },
    {
      "id": 8,
      "type": Entity.Schema,
      "name": "hugh schema",
      "parent": 6
    },
    {
      "id": 9,
      "type": Entity.Schema,
      "name": "information schema",
      "parent": 6
    },
    {
      "id": 10,
      "type": Entity.Schema,
      "name": "topology",
      "parent": 6
    },
    {
      "id": 11,
      "type": Entity.Table,
      "name": "layer",
      "parent": 10
    },
    {
      "id": 12,
      "type": Entity.Table,
      "name": "new table",
      "parent": 10
    },
    {
      "id": 13,
      "type": Entity.Table,
      "name": "topology",
      "parent": 10
    },
    {
      "id": 14,
      "type": Entity.Column,
      "name": "col 1",
      "parent": 13
    },
    {
      "id": 15,
      "type": Entity.Column,
      "name": "col 2",
      "parent": 13
    },
    {
      "id": 16,
      "type": Entity.Column,
      "name": "new table with child",
      "parent": 12
    },
    {
      "id": 17,
      "type": undefined,
      "name": "new node with no type",
      "parent": 16
    },
  
  ];