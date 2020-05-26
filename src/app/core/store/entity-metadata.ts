import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { TableEntity } from '..';
import { environment } from 'src/environments/environment';

function getTableId(table: TableEntity) {
  return table._id
}

const entityMetadata: EntityMetadataMap = {
  Table: {
    entityName: 'TableEntity',
    selectId: getTableId
  },
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.host,
  timeout: 3000, // request timeout
};

// because the plural of "hero" is not "heros"
const pluralNames = { Table: 'Tables' };

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
