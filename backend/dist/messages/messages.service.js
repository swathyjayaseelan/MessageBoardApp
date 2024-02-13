var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let messages = {};
export const findAll = () => __awaiter(void 0, void 0, void 0, function* () { return Object.values(messages); });
export const create = (newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new Date().valueOf();
    messages[id] = Object.assign({ id }, newMessage);
    return messages[id];
});
//# sourceMappingURL=messages.service.js.map