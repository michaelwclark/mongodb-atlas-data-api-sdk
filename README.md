# mongodb-atlas-data-api-sdk
Node SDK for Mongo Atlas Data API

Mongo Atlas recently released a Beta version of a Data API. Using this API you can access your MongoDB commands via API. This SDK attempts to make that as simple as possible.

## API Documentation
[Mongo Atlas Data API - BETA](https://docs.atlas.mongodb.com/api/data-api/)
[Resources](https://docs.atlas.mongodb.com/api/data-api-resources/)

## Examples
For examples of how to use the SDK see [this repository](https://github.com/michaelwclark/mongodb-atlas-data-api-sdk-examples.

## Usage
```javascript
import MongoAtlasDataApiSDK from 'mongodb-atlas-data-api-sdk'

const mongoAtlasDataApiSdk = new MongoAtlasDataApiSDK({
    apiKey: API_KEY,
    apiUrl: API_URL,
    dbCluster: DB_CLUSTER,
    dbName: DB_NAME,
    quiet: false
})

const { documents } = await mongoAtlasDataApiSdk.find({
  collection: COLLECTION_NAME,
  filter: {
    _id: {
      $in:
        [
            { $oid: "61c3472a1396e0693eba124c" },
            { $oid: "61eb2496b8f08060d1dee50a" },
        ]
    }
  }
})
```

## Available Methods
[findOne](https://docs.atlas.mongodb.com/api/data-api-resources/#find-a-single-document)
[find](https://docs.atlas.mongodb.com/api/data-api-resources/#find-multiple-documents)
[insertOne](https://docs.atlas.mongodb.com/api/data-api-resources/#insert-a-single-document)
[insertMany](https://docs.atlas.mongodb.com/api/data-api-resources/#insert-multiple-documents)
[updateOne](https://docs.atlas.mongodb.com/api/data-api-resources/#update-a-single-document)
[updateMany](https://docs.atlas.mongodb.com/api/data-api-resources/#update-multiple-documents)
[replaceOne](https://docs.atlas.mongodb.com/api/data-api-resources/#replace-a-single-document)
[deleteOne](https://docs.atlas.mongodb.com/api/data-api-resources/#delete-a-single-document)
[deleteMany](https://docs.atlas.mongodb.com/api/data-api-resources/#delete-multiple-documents)
[aggregate](https://docs.atlas.mongodb.com/api/data-api-resources/#run-an-aggregation-pipeline)

[Errors](https://docs.atlas.mongodb.com/api/data-api-resources/#error-codes)

# Notes
This projects uses ESM loader, if you need commonJS please open an issue and I'll add it in for you.

# Todo
Testing, better documentation, flow types or typescript. 