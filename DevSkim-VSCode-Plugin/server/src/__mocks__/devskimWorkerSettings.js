"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevSkimWorkerSettings = void 0;
class DevSkimWorkerSettings {
    getSettings(settings) {
        return this.defaultSettings();
    }
    getRulesDirectory() {
        return '';
    }
    defaultSettings() {
        let obj = Object.create(null);
        Object.assign(obj, {
            "enableBestPracticeRules": true,
            "enableDefenseInDepthSeverityRules": false,
            "enableInformationalSeverityRules": false,
            "enableLowSeverityRules": false,
            "enableManualReviewRules": true,
            "guidanceBaseURL": "https://github.com/Microsoft/DevSkim/blob/main/guidance/",
            "ignoreFiles": [
                "out/*", "bin/*", "node_modules/*", ".vscode/*", "yarn.lock",
                "logs/*", "*.log", "*.git", "rulesValidationLog.json",
            ],
            "ignoreRulesList": [],
            "manualReviewerName": "",
            "removeFindingsOnClose": true,
            "suppressionDurationInDays": 30,
            "validateRulesFiles": true,
        });
        return obj;
    }
}
exports.DevSkimWorkerSettings = DevSkimWorkerSettings;
//# sourceMappingURL=devskimWorkerSettings.js.map