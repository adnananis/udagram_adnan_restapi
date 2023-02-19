"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    "dev": {
        "username": process.env.POSTGRESS_USERNAME,
        "password": process.env.POSTGRESS_PASSWORD,
        "database": process.env.POSTGRESS_DATABASE,
        "host": process.env.POSTGRESS_HOST,
        "dialect": "postgres",
        "aws_region": process.env.POSTGRESS_AWS_REGION,
        "aws_profile": process.env.POSTGRESS_AWS_PROFILE,
        "aws_media_bucket": process.env.POSTGRESS_MEDIA_BUCKET //"udagram-407183722470-dev"
    },
    "jwt": {
        "secret": " "
    },
    "prod": {
        "username": "",
        "password": "",
        "database": "udagram_prod",
        "host": "",
        "dialect": "postgres"
    }
};
//# sourceMappingURL=config.js.map