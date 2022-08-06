"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DocumentController_1 = __importDefault(require("./database/DocumentController"));
const router = (0, express_1.Router)();
router.get('/documents', DocumentController_1.default.getAll);
router.get('/documents/:id', DocumentController_1.default.findById);
router.post('/documents', DocumentController_1.default.create);
router.put('/documents/:id', DocumentController_1.default.update);
router.delete('/documents/:id', DocumentController_1.default.delete);
exports.default = router;
