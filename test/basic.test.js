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
        _this.onUserAction = function (changes) {
            console.log('type', changes.type);
        };
        return _this;
    }
    App.prototype.render = function () {
        var items = this.state.items;
        return (React.createElement(__1["default"], { onChange: this.onChange }, function (_a) {
            var getToggleButtonProps = _a.getToggleButtonProps, getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, isOpen = _a.isOpen, inputValue = _a.inputValue, selectedItem = _a.selectedItem, highlightedIndex = _a.highlightedIndex;
            return (React.createElement("div", null,
                React.createElement("input", __assign({}, getInputProps({
                    placeholder: 'Favorite color ?'
                }))),
                React.createElement("button", __assign({}, getToggleButtonProps())),
                isOpen ? (React.createElement("div", { style: { border: '1px solid #ccc' } }, items
                    .filter(function (i) {
                    return !inputValue ||
                        i.toLowerCase().includes(inputValue.toLowerCase());
                })
                    .map(function (item, index) { return (React.createElement("div", __assign({}, getItemProps({ item: item, index: index }), { key: item, style: {
                        backgroundColor: highlightedIndex === index ? 'gray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal'
                    } }), item)); }))) : null));
        }));
    };
    return App;
}(React.Component));
exports["default"] = App;
