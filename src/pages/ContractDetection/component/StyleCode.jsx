import React, { useEffect } from 'react'

import { StyleCodeDom } from '../styled'
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'
//主题
import 'codemirror/theme/material.css';
import 'codemirror/theme/solarized.css'
import 'codemirror/theme/panda-syntax.css'
// 折叠代码
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/indent-fold.js';

// 代码提示
import 'codemirror/addon/hint/show-hint.css'; //
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/anyword-hint.js'; // 简单提示，按需引入，spl可引入sql-hint.js

import "codemirror/addon/comment/comment.js";
// 高亮
import "codemirror/addon/selection/active-line.js";

// python语言
import "codemirror/mode/python/python.js";

// 括号匹配
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/addon/edit/matchbrackets.js";

import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/javascript-lint.js'



let myCodeMirror;



export function StyleCode({ value }) {
    useEffect(() => {
        const textArea = document.getElementById("code");
        myCodeMirror = CodeMirror.fromTextArea(textArea, {
            theme: 'panda-syntax',//主题
            lineNumbers: true,//显示行号
            firstLineNumber: 1,//行号从几开始，默认1
            lineWrapping: true,//滚动或换行
            scrollbarStyle: null,//隐藏滚动条样式
            tabSize: 2, //tab键缩进,默认4
            smartIndent: true, // 智能缩进
            indentUnit: 2, // 智能缩进单位为2个空格长度
            indentWithTabs: true, // 使用制表符进行智能缩进
            autofocus: true,//自动获取焦点
            // 在行槽中添加行号显示器、折叠器、语法检测器
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
            foldGutter: true, // 启用行槽中的代码折叠
            mode: "python", // 要使用的模式//https://codemirror.net/mode/
            styleActiveLine: true, // 显示选中行的样式
            matchBrackets: true,	//括号匹配
            autoCloseBrackets: true,//括号自动补全，()[]{}''""
            hintOptions: {
                completeSingle: false//代码自动补全功能不默认补充
            },
            readOnly: true,
        });
        myCodeMirror.setOption("value", 'print("hello word")');//初始值
        myCodeMirror.on("keypress", function () {//代码补全功能
            myCodeMirror.showHint();
        });
        if(value !==''){
            myCodeMirror.setOption("value",value);//初始值
        }
        
        // myCodeMirror.setSize('40vw', '50vh');//编辑框大小(宽，高)
    }, [value])


    return <StyleCodeDom >

        <textarea id="code" name="code"> </textarea>

    </StyleCodeDom>
}



