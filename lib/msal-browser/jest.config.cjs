/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        url: "https://localhost:8081/index.html"
    },
    collectCoverageFrom: ["src/**/*.ts"],
    coverageReporters: [["lcov", { "projectRoot": "../../" }]],
    setupFilesAfterEnv: ["<rootDir>/test/setupCrypto.ts"],
};
