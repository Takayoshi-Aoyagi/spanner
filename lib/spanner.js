"use strict";

const util = require('util');
const spanner = require('@google-cloud/spanner');

/**
 *
 */
class Spanner {

    /**
     *
     */
    constructor (instanceId, databaseId) {
	const _spanner = spanner();
	this.instance = _spanner.instance(instanceId);
	this.database = this.instance.database(databaseId);
    }

    /**
     *
     */
    _getTable (tableName) {
	return this.database.table(tableName);
    }

    /**
     *
     */
    insert (tableName, data) {
	let table = this._getTable(tableName);
	return table.insert(data);
    }
    
    /**
     *
     */
    update (tableName, data) {
	let table = this._getTable(tableName);
	return table.update(data);
    }

    /**
     *
     */
    query (sql) {
	return this.database.run(sql);
    }

    remove (tableName, ids) {
	let table = this._getTable(tableName);
	return table.deleteRows(ids);
    }
}

module.exports = Spanner;
