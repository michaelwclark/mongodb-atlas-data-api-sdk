import { FindOneParams, FindParams, UpdateParams, DeleteParams, InsertManyParams, InsertOneParams, ReplaceOneParams, AggregateParams } from './params.js';
export default class MongoAtlasDataApiSDK {
    apiKey: string;
    apiUrl: string;
    dbCluster: string;
    dbName: string;
    quiet: boolean;
    constructor(apiKey: string, apiUrl: string, dbCluster: string, dbName: string, quiet: boolean);
    private callApi;
    findOne({ collection, filter, projection }: FindOneParams): Promise<{
        document: any;
    }>;
    find({ collection, filter, projection, sort, limit, skip }: FindParams): Promise<{
        documents: any;
    }>;
    insertOne({ collection, document }: InsertOneParams): Promise<{
        insertedId: any;
    }>;
    insertMany({ collection, documents }: InsertManyParams): Promise<{
        insertedIds: any;
    }>;
    updateOne({ collection, filter, update, upsert }: UpdateParams): Promise<{
        matchedCount: any;
        modifiedCount: any;
        upsertedId: any;
    }>;
    updateMany({ collection, filter, update, upsert }: UpdateParams): Promise<{
        matchedCount: any;
        modifiedCount: any;
        upsertedId: any;
    }>;
    replaceOne({ collection, filter, replacement, upsert }: ReplaceOneParams): Promise<{
        matchedCount: any;
        modifiedCount: any;
        upsertedId: any;
    }>;
    deleteOne({ collection, filter }: DeleteParams): Promise<{
        deletedCount: any;
    }>;
    deleteMany({ collection, filter }: DeleteParams): Promise<{
        deletedCount: any;
    }>;
    aggregate({ collection, pipeline }: AggregateParams): Promise<{
        documents: any;
    }>;
    private outputResults;
}
