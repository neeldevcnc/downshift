"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var __1 = require("../");
var CustomList = function (_a) {
    var isOpen = _a.isOpen, children = _a.children;
    return React.createElement("div", { className: isOpen ? 'open' : '' }, children);
};
var CustomListItem = function (_a) {
    var isSelected = _a.isSelected, children = _a.children;
    return React.createElement("div", { className: isSelected ? 'selected' : '' }, children);
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: ['apple', 'orange', 'carrot']
        };
        _this.onChange = function (selectedItem) {
            console.log('selectedItem', selectedItem);
        };
        return _this;
    }
    App.prototype.render = function () {
        var items = this.state.items;
        var initialSelectedItem = this.state.items[0];
        return (React.createElement(__1["default"], { initialSelectedItem: initialSelectedItem }, function (_a) {
            var getToggleButtonProps = _a.getToggleButtonProps, getItemProps = _a.getItemProps, selectedItem = _a.selectedItem, isOpen = _a.isOpen;
            return (React.createElement("div", { style: { position: 'relative' } },
                React.createElement("div", __assign({}, getToggleButtonProps()), selectedItem),
                React.createElement(CustomList, { isOpen: isOpen }, items.map(function (item, index) { return (React.createElement(CustomListItem, __assign({ key: index }, getItemProps({
                    item: item,
                    index: index,
                    isSelected: selectedItem === item
                })), item)); }))));
        }));
    };
    return App;
}(React.Component));
exports["default"] = App;
