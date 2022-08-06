"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentModel_1 = __importDefault(require("./DocumentModel"));
const DocumentController = {
    async getAll(req, res) {
        let documents = await DocumentModel_1.default.find();
        return res.json(documents);
    },
    async findById(req, res) {
        const { id } = req.params;
        let document = await DocumentModel_1.default.findById(id);
        return res.json(document);
    },
    async create(req, res) {
        const { name, date, link, type } = req.body;
        let document = await DocumentModel_1.default.create(req.body);
        return res.json(document);
    },
    async update(req, res) {
        const { id } = req.params;
        const { name, date, link, type } = req.body;
        let document = await DocumentModel_1.default.findByIdAndUpdate(id, {
            name: name,
            date: date,
            link: link,
            type: type
        });
        return res.json(document);
    },
    async delete(req, res) {
        const { id } = req.params;
        let document = await DocumentModel_1.default.findByIdAndDelete(id);
        return res.json(document);
    }
};
exports.default = DocumentController;
