;
exports.__esModule = true;
const getPostion = exports.getPostion = function getPostion(obj) {
    const position = {};
    position.width = obj.getBoundingClientRect().width;
    position.height = obj.getBoundingClientRect().height;
    position.top = obj.getBoundingClientRect().top + document.documentElement.scrollTop;
    position.right = obj.getBoundingClientRect().right;
    position.bottom = obj.getBoundingClientRect().bottom;
    position.left = obj.getBoundingClientRect().left + document.documentElement.scrollLeft;
    return position;
};