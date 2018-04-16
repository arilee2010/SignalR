// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import { ILogger, LogLevel } from "./ILogger";

export class NullLogger implements ILogger {
    public static instance: ILogger = new NullLogger();

    private constructor() {}

    public log(logLevel: LogLevel, message: string): void {
    }
}

export class ConsoleLogger implements ILogger {
    private readonly minimumLogLevel: LogLevel;

    constructor(minimumLogLevel: LogLevel) {
        this.minimumLogLevel = minimumLogLevel;
    }

    public log(logLevel: LogLevel, message: string): void {
        if (logLevel >= this.minimumLogLevel) {
            switch (logLevel) {
                case LogLevel.Error:
                    console.error(`${LogLevel[logLevel]}: ${message}`);
                    break;
                case LogLevel.Warning:
                    console.warn(`${LogLevel[logLevel]}: ${message}`);
                    break;
                case LogLevel.Information:
                    console.info(`${LogLevel[logLevel]}: ${message}`);
                    break;
                default:
                    console.log(`${LogLevel[logLevel]}: ${message}`);
                    break;
            }
        }
    }
}
