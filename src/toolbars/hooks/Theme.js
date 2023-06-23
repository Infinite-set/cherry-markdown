/**
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import MenuBase from '@/toolbars/MenuBase';
import { changeTheme } from '@/utils/config';
/**
 * 修改主题
 */
export default class Theme extends MenuBase {
  constructor($cherry) {
    super($cherry);
    this.setName('theme', 'insertChart');
    this.subMenuConfig = [];
    const self = this;
    $cherry.options.theme.forEach((one) => {
      self.subMenuConfig.push({
        iconName: one.className,
        name: one.label,
        onclick: self.bindSubClick.bind(self, one.className),
      });
    });
  }

  /**
   * 响应点击事件
   * @param {string} selection 被用户选中的文本内容
   * @param {string} shortKey 快捷键参数
   * @param {CodeMirror.Editor} codemirror
   * @returns {string} 回填到编辑器光标位置/选中文本区域的内容
   */
  onClick(selection, shortKey = '', codemirror) {
    const currentTop = this.editor.editor.getScrollInfo().top;
    const targetLine = this.editor.editor.lineAtHeight(currentTop, 'local');
    console.log('不知道这个是什么', targetLine);
    // scrollBy(0, -targetLine);
    this.editor.previewer.scrollToLineNum(0);
    this.editor.scrollToLineNum(0, 0, 1);
    changeTheme(this.$cherry, shortKey);
    this.updateMarkdown = false;
    return '';
  }
}
