
export interface FindOneParams {
    collection: string
    filter?: any
    projection?: any
}

export interface FindParams {
    collection: string
    filter?: any
    projection?: any
    sort?: any
    limit?: number
    skip?: number
}

export interface InsertOneParams {
    collection: string
    document: any
}

export interface InsertManyParams {
    collection: string
    documents: any[]
}

export interface UpdateParams {
    collection: string
    filter: any
    update: any
    upsert?: boolean
}

export interface ReplaceOneParams {
    collection: string
    filter: any
    replacement: any
    upsert?: boolean
}
export interface DeleteParams {
    collection: string
    filter: any
}

export interface AggregateParams {
    collection: string
    pipeline: any[]
}

